import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class OpenAIService {
  private apiUrl = 'http://localhost:3000/api/chat';  // This should point to your Node.js backend
  private apiUrlImage = 'http://localhost:3000/api/generate-image';


  // private apiUrl = 'https://code-craft-backend-jy7x.onrender.com/api/chat';  // This should point to your Node.js backend
  // private apiUrlImage = 'https://code-craft-backend-jy7x.onrender.com/api/generate-image';

  constructor(private http: HttpClient) {}

  // text
  sendMessage(message: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { message });
  }

// image
  generateImage(prompt: string): Observable<any> {
    return this.http.post<any>(this.apiUrlImage, { prompt });
  }

}

