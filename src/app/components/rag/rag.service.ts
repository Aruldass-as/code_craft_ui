import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RagService {
   private apiUrl = 'http://localhost:3000/api/query';

  constructor(private http: HttpClient) {}

  uploadFile(file: File) {
    const fd = new FormData();
    fd.append('file', file);
    return this.http.post('/api/upload', fd);
  }

  ask(question: string) {
    return this.http.post<{ reply: string }>(this.apiUrl, { question });
  }
}
