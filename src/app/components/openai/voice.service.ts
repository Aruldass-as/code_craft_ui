import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface VoiceChatResponse {
  userText: string;
  botReply: string;
  audioBase64: string;
}

@Injectable({
  providedIn: 'root',
})

export class VoiceService {
  //private apiUrl = 'http://localhost:3000/api/voice-chatbot';
  private apiUrl = 'https://code-craft-backend-jy7x.onrender.com/api/voice-chatbot';
 
  constructor(private http: HttpClient) {}

  sendAudio(audioBlob: Blob): Observable<VoiceChatResponse> {
    const formData = new FormData();
    formData.append('audio', audioBlob, 'voice.webm');

    return this.http.post<VoiceChatResponse>(this.apiUrl, formData);
  }
}
