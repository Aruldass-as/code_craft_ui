import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class SocketService {
  private socket: Socket;
  // private readonly SERVER_URL = 'http://localhost:3000';
  
  private readonly SERVER_URL = 'https://code-craft-backend-jy7x.onrender.com'

  constructor() {
    this.socket = io(this.SERVER_URL);
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
