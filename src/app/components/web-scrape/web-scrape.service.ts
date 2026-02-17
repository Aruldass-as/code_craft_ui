import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiConfigService } from '../../services/api-config.service';

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
  constructor(
    private http: HttpClient,
    private apiConfig: ApiConfigService
  ) {}

  scrapeMultiple(urls: string[]): Observable<ScrapeResponse> {
    return this.http.post<ScrapeResponse>(this.apiConfig.getFastApiEndpoint('/scrape-multiple'), { urls });
  }
}
