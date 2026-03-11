import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';
import { ApiConfigService } from '../../services/api-config.service';

@Injectable({ providedIn: 'root' })

export class SocketService {
  private socket: Socket;

  constructor(private apiConfig: ApiConfigService) {
    // Uses FastAPI URL - note: FastAPI does not have socket.io; use OpenAIService for REST chat
    const baseUrl = this.apiConfig.fastApiUrl.replace(/\/$/, '');
    this.socket = io(baseUrl);
  }

  sendMessage(msg: string) {
    this.socket.emit('message', msg);
  }

  receiveMessage(): Observable<string> {
    return new Observable((observer) => {
      this.socket.on('message', (data: string) => {
        observer.next(data);
      });
    });
  }
}
