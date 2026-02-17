import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiConfigService } from '../../services/api-config.service';

@Injectable({ providedIn: 'root' })
export class OpenAIService {
  constructor(
    private http: HttpClient,
    private apiConfig: ApiConfigService
  ) {}

  sendMessage(message: string): Observable<any> {
    return this.http.post<any>(this.apiConfig.getNodeEndpoint('/chat'), { message });
  }

  generateImage(prompt: string): Observable<any> {
    return this.http.post<any>(this.apiConfig.getNodeEndpoint('/generate-image'), { prompt });
  }
}

