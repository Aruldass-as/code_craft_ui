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
    if (!navigator.mediaDevices?.getUserMedia) {
      this.error = 'Microphone not supported in this browser.';
      return;
    }
    if (!window.isSecureContext) {
      this.error = 'Microphone requires HTTPS. Use https://codecraft.life';
      return;
    }
    try {
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
  } catch (err: unknown) {
    const e = err as DOMException;
    console.error('getUserMedia failed', e?.name, e?.message, err);
    this.recording = false;
    this.ngZone.run(() => {
      if (e?.name === 'NotAllowedError' || e?.name === 'PermissionDeniedError') {
        this.error = 'Microphone blocked. Allow it in browser settings (click lock icon in address bar).';
      } else if (e?.name === 'NotFoundError') {
        this.error = 'No microphone found. Connect a microphone and try again.';
      } else if (e?.name === 'NotReadableError') {
        this.error = 'Microphone in use by another app. Close it and try again.';
      } else if (e?.name === 'SecurityError') {
        this.error = 'Microphone blocked (secure context required). Use https://codecraft.life';
      } else {
        this.error = e?.message || 'Microphone access failed. Please try again.';
      }
    });
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
