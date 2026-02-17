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
  error: string = '';
  recording = false;
  mediaRecorder!: MediaRecorder;
  audioChunks: Blob[] = [];
  currentAudio: HTMLAudioElement | null = null;
  loading = false;

  constructor(private voiceService: VoiceService, private ngZone: NgZone) {}

  async startRecording() {
    try {
    //   // 1️⃣ Check microphone permission first
    // const permission = await navigator.permissions.query({ name: 'microphone' as PermissionName });

    // if (permission.state === 'denied') {
    //   // If user previously blocked, alert and stop
    //   alert('Microphone access is blocked. Please enable it in your browser settings.');
    //   return;
    // }

    // // Optional: You can also listen for changes in permission state
    // permission.onchange = () => {
    //   console.log('Microphone permission changed to', permission.state);
    // };

    this.recording = true;
    this.error = '';
    this.audioChunks = [];

    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    this.mediaRecorder = new MediaRecorder(stream);

    this.mediaRecorder.ondataavailable = (event) => this.audioChunks.push(event.data);

    this.mediaRecorder.onstop = async () => {
      const audioBlob = new Blob(this.audioChunks, { type: 'audio/webm' });
      this.voiceService.sendAudio(audioBlob).subscribe({
        next: (res: VoiceChatResponse) => {
          this.ngZone.run(() => {
            this.userText = res.userText;
            this.botReply = res.botReply;
            this.error = '';
            this.loading = false;
          });
          this.currentAudio = new Audio(`data:audio/mpeg;base64,${res.audioBase64}`);
          this.currentAudio.play();
        },
        error: (err) => {
          this.ngZone.run(() => {
            this.error = err.error?.detail || err.error?.error || 'Voice chat failed.';
            this.loading = false;
          });
          console.error(err);
        }
      });
    };

    this.mediaRecorder.start();
  } catch (err) {
    console.error('Microphone permission denied', err);
    this.recording = false;
    alert('Microphone access is required to use this feature.');
  }
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
    }
    this.userText = '';
    this.botReply = '';
    this.error = '';
    this.loading = false;
  }
}
