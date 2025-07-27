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

  generate() {
    if (!this.prompt) return;
    this.loading = true;
    this.error = '';
    this.imageUrl = null;

    this.openai.generateImage(this.prompt).subscribe({
      next: (res) => {
        this.imageUrl = res.imageUrl;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Image generation failed.';
        this.loading = false;
        console.error(err);
      },
    });
  }
}
