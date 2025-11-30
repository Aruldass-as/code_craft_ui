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

  private apiUrl = 'http://localhost:8000/scrape-multiple';

  constructor(private http: HttpClient) {}

  scrapeMultiple(urls: string[]): Observable<ScrapeResponse> {
    return this.http.post<ScrapeResponse>(this.apiUrl, { urls });
  }
}
