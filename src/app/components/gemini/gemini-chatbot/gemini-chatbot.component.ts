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

  constructor(private geminiChatService: GeminiChatService) {}

  send() {
    this.geminiChatService.sendMessage(this.userMessage).subscribe(res => {
      this.reply = res.reply;
    });
  }
}
