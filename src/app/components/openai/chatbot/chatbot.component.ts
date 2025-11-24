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
    this.loading = true;
    this.openai.sendMessage(this.userMessage).subscribe({
      next: (res) => {
        this.aiResponse = res.reply;
        this.loading = false;
      },
      error: (err) => {
        this.aiResponse = err.error.error;
        this.loading = false;
      }
    });
  }
}
