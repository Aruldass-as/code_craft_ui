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
    this.openai.sendMessage(msg).subscribe({
      next: (res) => {
        this.aiResponse = res?.reply ?? res?.response ?? '';
        this.loading = false;
      },
      error: (err) => {
        const detail = err.error?.detail;
        this.aiResponse = typeof detail === 'string' ? detail
          : Array.isArray(detail) ? detail.map((d: any) => d?.msg ?? d).join(', ')
          : err.error?.error || err.message || 'Request failed. Ensure FastAPI is running at http://localhost:8000';
        this.loading = false;
      }
    });
  }
}
