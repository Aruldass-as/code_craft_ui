import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LlmMcpService {

  private apiUrl = 'https://code-craft-backend-jy7x.onrender.com/api/run-agent';
  // private apiUrl = 'http://localhost:3000/api/run-agent';


  constructor(private http: HttpClient) {}

  runAgent(taskDescription: string): Observable<{ result: string }> {
    return this.http.post<{ result: string }>(this.apiUrl, { taskDescription });
  }
}
