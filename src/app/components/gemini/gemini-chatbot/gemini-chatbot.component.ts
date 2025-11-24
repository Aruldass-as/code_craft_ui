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
    this.loading = true;
    this.geminiChatService.sendMessage(this.userMessage).subscribe({
      next: (res) => {
        this.reply = res.reply;
        this.loading = false;
      },
      error: (err) => {
        this.reply = err.error.error;
        this.loading = false;
      }
    });
  }
}
