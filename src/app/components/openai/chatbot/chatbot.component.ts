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

  constructor(private openai: OpenAIService) { } 

  askAI() {
    this.openai.sendMessage(this.userMessage).subscribe({
      next: (res) => {
        this.aiResponse = res.reply;
      },
      error: (err) => {
        console.error('Error talking to GPT:', err);
        this.aiResponse = 'Something went wrong';
      }
    });
  }
}
