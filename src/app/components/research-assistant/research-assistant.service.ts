import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class ResearchAssistantService {
  // FastAPI endpoint
  // private apiUrl = 'http://localhost:8000/upload';
  private apiUrl = 'https://fastapi-app-36j5.onrender.com/upload'

  constructor(private http: HttpClient) {}

  uploadFile(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(this.apiUrl, formData);
  }
  
}
