import { Component } from '@angular/core';
import { SocketService } from '../chat.service';

@Component({
  selector: 'app-ai-conversation',
  templateUrl: './ai-conversation.component.html',
  styleUrls: ['./ai-conversation.component.scss']
})

export class AiConversationComponent {

  // chat
  message = '';
  messages: string[] = [];
  
  constructor(private socketService: SocketService) { } 

  ngOnInit(){
     this.socketService.receiveMessage().subscribe((msg) => {
      console.log('📥 Received from server:', msg);
        this.messages.push(msg);
      });
  }

  //chat
   send() {
    if (this.message.trim()) {
      this.socketService.sendMessage(this.message);
      this.message = '';
    }
  }
}
