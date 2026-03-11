import { Component } from '@angular/core';
import { ClaudeChatService } from '../claude-chat.service';

@Component({
  selector: 'app-claude-chatbot',
  templateUrl: './claude-chatbot.component.html',
  styleUrls: ['./claude-chatbot.component.scss']
})

export class ClaudeChatbotComponent {
 userMessage = '';
 reply = ''
 loading = false;

  constructor(private claudeChatService: ClaudeChatService) {}

  send() {
    this.loading = true;
    this.claudeChatService.sendMessage(this.userMessage).subscribe({
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
