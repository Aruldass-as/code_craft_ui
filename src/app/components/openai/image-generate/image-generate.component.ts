import { Component } from '@angular/core';
import { OpenAIService } from '../openai.service';

@Component({
  selector: 'app-image-generate',
  templateUrl: './image-generate.component.html',
  styleUrls: ['./image-generate.component.scss']
})
export class ImageGenerateComponent {
  prompt = '';
  imageUrl: string | null = null;
  loading = false;
  error = '';

  constructor(private openai: OpenAIService){}

  onImageError() {
    this.imageUrl = null;
    this.error = 'Failed to load image. URL may have expired.';
  }

  generate() {
    if (!this.prompt) return;
    this.loading = true;
    this.error = '';
    this.imageUrl = null;

    this.openai.generateImage(this.prompt).subscribe({
      next: (res) => {
        this.imageUrl = res?.url ?? res?.imageUrl ?? res?.b64_data_url ?? null;
        this.loading = false;
      },
      error: (err) => {
        this.error = err.error?.detail || err.error?.error || 'Image generation failed.';
        this.loading = false;
        console.error(err);
      },
    });
  }
}
