import { Component } from '@angular/core';
import { OpenAIService } from '../openai.service';

@Component({
  selector: 'app-ai-conversation',
  templateUrl: './ai-conversation.component.html',
  styleUrls: ['./ai-conversation.component.scss']
})

export class AiConversationComponent {
  message = '';
  messages: string[] = [];
  loading = false;

  constructor(private openai: OpenAIService) { }

  send() {
    if (!this.message.trim() || this.loading) return;
    const userMsg = this.message.trim();
    this.messages.push(userMsg);
    this.message = '';
    this.loading = true;
    this.openai.sendMessage(userMsg).subscribe({
      next: (res) => {
        this.messages.push(res.reply || res.response || '');
        this.loading = false;
      },
      error: (err) => {
        this.messages.push('Error: ' + (err.error?.detail || err.message || 'Request failed'));
        this.loading = false;
      }
    });
  }
}
