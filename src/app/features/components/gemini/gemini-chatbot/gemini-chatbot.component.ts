import { Component } from '@angular/core';
import { GeminiChatService } from '../gemini-chat.service';

@Component({
  selector: 'app-gemini-chatbot',
  templateUrl: './gemini-chatbot.component.html',
  styleUrls: ['./gemini-chatbot.component.scss']
})

export class GeminiChatbotComponent {
 userMessage = '';
 reply = ''
 loading = false;

  constructor(private geminiChatService: GeminiChatService) {}

  send() {
    const msg = this.userMessage?.trim();
    if (!msg) {
      this.reply = 'Please enter a message.';
      return;
    }
    this.loading = true;
    this.reply = '';
    this.geminiChatService.sendMessage(msg).subscribe({
      next: (res) => {
        this.reply = res.reply;
        this.loading = false;
      },
      error: (err) => {
        this.reply = err.error?.detail || err.error?.error || 'Request failed. Add GOOGLE_API_KEY to fastapi_app/.env';
        this.loading = false;
      }
    });
  }
}
