import { Component } from '@angular/core';
import { OpenAIService } from '../openai.service';
import { VoiceService } from '../voice.service';

@Component({
  selector: 'app-voice-recognition',
  templateUrl: './voice-recognition.component.html',
  styleUrls: ['./voice-recognition.component.scss']
})
export class VoiceRecognitionComponent {
  promptVoice = '';
  imageUrl: string | null = null;
  loading = false;
  error = '';

  constructor(private openai: OpenAIService, private voiceService: VoiceService) { } 

  generateVoice() {
    if (!this.promptVoice) return;

    this.loading = true;
    this.error = '';
    this.imageUrl = null;

    this.openai.generateImage(this.promptVoice).subscribe({
      next: (res) => {
        this.imageUrl = res.imageUrl;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Image generation failed.';
        this.loading = false;
      },
    });
  }

  startVoiceInput() {
    this.voiceService.startListening((text) => {
      this.promptVoice = text;
      this.generateVoice(); // optional: auto-generate after voice
    });
  }

}
