import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface ScrapeResult {
  url: string;
  success: boolean;
  data?: string;
  error?: string;
}

interface ScrapeResponse {
  success: boolean;
  count: number;
  results: ScrapeResult[];
}

@Injectable({
  providedIn: 'root'
})

export class WebScrapeService {

    // FastAPI endpoint
  // private apiUrl = 'http://127.0.0.1:8000/scrape-multiple'; 
  private apiUrl = 'https://fastapi-app-36j5.onrender.com/scrape-multiple'

  constructor(private http: HttpClient) {}

  scrapeMultiple(urls: string[]): Observable<ScrapeResponse> {
    return this.http.post<ScrapeResponse>(this.apiUrl, { urls });
  }
}
