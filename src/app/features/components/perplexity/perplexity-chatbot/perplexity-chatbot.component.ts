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
 loading = false;

  constructor(private perplexityChatService: PerplexityChatService) {}

  send() {
    this.loading = true;
    this.perplexityChatService.sendMessage(this.userMessage).subscribe({
      next: (res) => {
        this.reply = res.reply;
        this.loading = false;
      },
      error: (err) => {
        this.reply = 'Error: ' + err.error.error;
        this.loading = false;
      }
    });
  }
}
