import { Injectable, NgZone } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VoiceService {
  private recognition: any;
  public isListening = false;

  constructor(private ngZone: NgZone) {
    const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
    this.recognition = new SpeechRecognition();
    this.recognition.continuous = false;
    this.recognition.lang = 'en-US';
    this.recognition.interimResults = false;
    this.recognition.maxAlternatives = 1;
  }

  startListening(callback: (text: string) => void): void {
    this.isListening = true;

    this.recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      this.ngZone.run(() => {
        callback(transcript);
        this.isListening = false;
      });
    };

    this.recognition.onerror = (event: any) => {
      console.error('Speech recognition error', event);
      this.isListening = false;
    };

    this.recognition.onend = () => {
      this.isListening = false;
    };

    this.recognition.start();
  }

  stopListening(): void {
    this.recognition.stop();
    this.isListening = false;
  }
}
