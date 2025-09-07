// frontend/src/app/chat.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class McpService {
  private API_URL = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  // Ask generic AI question
  ask(question: string): Observable<any> {
    return this.http.post(`${this.API_URL}/ask`, { question
    });
  }

  // Get Google Calendar events
  askCalendar(authToken: string): Observable<any> {
    return this.http.post(`${this.API_URL}/mcp`, {
      intent: 'get_calendar',
      params: {},
      auth: authToken
    });
  }

  // Get Gmail messages
  askGmail(authToken: string): Observable<any> {
    return this.http.post(`${this.API_URL}/mcp`, {
      intent: 'get_gmail',
      params: {},
      auth: authToken
    });
  }

  // Run database query
  askDatabase(query: string): Observable<any> {
    return this.http.post(`${this.API_URL}/mcp`, {
      intent: 'query_db',
      params: { query },
      auth: {}
    });
  }
}

