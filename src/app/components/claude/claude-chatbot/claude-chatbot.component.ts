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

  constructor(private claudeChatService: ClaudeChatService) {}

  send() {
    this.claudeChatService.sendMessage(this.userMessage).subscribe(res => {
      this.reply = res.reply;
    });
  }
}
