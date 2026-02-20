import { Component } from '@angular/core';
import { OpenAIService } from '../openai.service';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss']
})
export class ChatbotComponent {
  userMessage = '';
  aiResponse = '';
  loading = false;

  constructor(private openai: OpenAIService) { } 

  askAI() {
    const msg = this.userMessage?.trim();
    if (!msg) {
      this.aiResponse = 'Please enter a message.';
      return;
    }
    this.loading = true;
    this.aiResponse = '';
    this.openai.sendMessageStream(msg).subscribe({
      next: (chunk) => {
        this.aiResponse += chunk;
        this.loading = false; // show content as soon as first chunk arrives
      },
      error: (err) => {
        this.aiResponse = err.message || 'Request failed. Ensure FastAPI is running at http://localhost:8000';
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      }
    });
  }
}
