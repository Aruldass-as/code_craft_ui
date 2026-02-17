import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiConfigService } from '../../services/api-config.service';


export interface VoiceChatResponse {
  userText: string;
  botReply: string;
  audioBase64: string;
}

@Injectable({
  providedIn: 'root',
})

export class VoiceService {
  constructor(
    private http: HttpClient,
    private apiConfig: ApiConfigService
  ) {}

  sendAudio(audioBlob: Blob): Observable<VoiceChatResponse> {
    const formData = new FormData();
    formData.append('audio', audioBlob, 'voice.webm');

    return this.http.post<VoiceChatResponse>(this.apiConfig.getFastApiEndpoint('/voice-chatbot'), formData);
  }
}
