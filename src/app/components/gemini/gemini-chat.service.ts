import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class GeminiChatService {
  // private apiUrl = 'http://localhost:3000/api/gemini';
  private apiUrl = 'https://code-craft-backend-jy7x.onrender.com/api/gemini';


  constructor(private http: HttpClient) {}

  sendMessage(message: string) {
    return this.http.post<{ reply: string }>(this.apiUrl, { message });
  }
}
