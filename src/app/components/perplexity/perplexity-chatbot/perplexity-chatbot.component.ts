import { Component } from '@angular/core';
import { PerplexityChatService } from '../perplexity-chat.service';

@Component({
  selector: 'app-perplexity-chatbot',
  templateUrl: './perplexity-chatbot.component.html',
  styleUrls: ['./perplexity-chatbot.component.scss']
})

export class PerplexityChatbotComponent {
 userMessage = '';
 reply = ''

  constructor(private perplexityChatService: PerplexityChatService) {}

  send() {
    this.perplexityChatService.sendMessage(this.userMessage).subscribe(res => {
      this.reply = res.reply;
    });
  }
}
