import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({ providedIn: 'root' })

export class VideoGenService {
  // private apiBase = 'http://localhost:3000/api';
  private apiBase = 'https://code-craft-backend-jy7x.onrender.com/api';

  constructor(private http: HttpClient) {}

  generateVideo(prompt: string) {
    return this.http.post<{ apiFileId: string }>(`${this.apiBase}/generate-video`, { prompt });
  }

  checkStatus(id: string) {
    return this.http.get<{ status: string, apiFileSignedUrl?: string }>(`${this.apiBase}/video-status/${id}`);
  }
  
}
