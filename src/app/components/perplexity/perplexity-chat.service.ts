import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfigService } from '../../services/api-config.service';

@Injectable({ providedIn: 'root' })
export class PerplexityChatService {
  constructor(
    private http: HttpClient,
    private apiConfig: ApiConfigService
  ) {}

  sendMessage(message: string) {
    return this.http.post<{ reply: string }>(this.apiConfig.getFastApiEndpoint('/perplexity'), { message });
  }
}
