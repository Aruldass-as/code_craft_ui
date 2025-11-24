import { Component, NgZone } from '@angular/core';
import { OpenAIService } from '../openai.service';
import { VoiceService, VoiceChatResponse } from '../voice.service';

@Component({
  selector: 'app-voice-recognition',
  templateUrl: './voice-recognition.component.html',
  styleUrls: ['./voice-recognition.component.scss']
})
export class VoiceRecognitionComponent {
  userText: string = '';
  botReply: string = '';
  recording = false;
  mediaRecorder!: MediaRecorder;
  audioChunks: Blob[] = [];
  currentAudio: HTMLAudioElement | null = null;
  loading = false;

  constructor(private voiceService: VoiceService, private ngZone: NgZone) {}

  async startRecording() {
    this.recording = true;
    this.audioChunks = [];

    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    this.mediaRecorder = new MediaRecorder(stream);

    this.mediaRecorder.ondataavailable = (event) => this.audioChunks.push(event.data);

    this.mediaRecorder.onstop = async () => {
      const audioBlob = new Blob(this.audioChunks, { type: 'audio/webm' });
      this.voiceService.sendAudio(audioBlob).subscribe((res: VoiceChatResponse) => {
        this.ngZone.run(() => {
          this.userText = res.userText;
          this.botReply = res.botReply;
          this.loading = false;
        });
        this.currentAudio = new Audio(`data:audio/mpeg;base64,${res.audioBase64}`);
        this.currentAudio.play();
      });
    };

    this.mediaRecorder.start();
  }

  stopRecording() {
    this.recording = false;
    this.mediaRecorder.stop();
    this.loading = true;
  }

  stop(){
    if (this.currentAudio) {
      this.currentAudio.pause();
      this.currentAudio.currentTime = 0;
      this.userText = '';
      this.botReply = '';
       this.loading = false;
    }
  }
}
