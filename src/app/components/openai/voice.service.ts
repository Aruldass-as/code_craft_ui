import { Injectable, NgZone } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VoiceService {
  private recognition: any;
  public isListening = false;

  constructor(private ngZone: NgZone) {
    const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;

    if (!SpeechRecognition) {
      console.warn("Speech Recognition not supported on this browser");
      return;
    }

    this.recognition = new SpeechRecognition();
    this.recognition.continuous = false;
    this.recognition.lang = 'en-US';
    this.recognition.interimResults = false;
    this.recognition.maxAlternatives = 1;
  }

  startListening(callback: (text: string) => void): void {
    if (!this.recognition) {
      alert("Voice recognition not supported on this device.");
      return;
    }

    this.isListening = true;

    this.recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      this.ngZone.run(() => {
        callback(transcript);
        this.isListening = false;
      });
    };

    this.recognition.onerror = (event: any) => {
      console.error('Speech recognition error', event.error);
      this.isListening = false;
    };

    this.recognition.onend = () => {
      this.isListening = false;
    };

    this.recognition.start();
  }

  stopListening(): void {
    if (this.recognition) {
      this.recognition.stop();
    }
    this.isListening = false;
  }
}
