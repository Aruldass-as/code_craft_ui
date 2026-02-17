import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ApiConfigService } from '../../services/api-config.service';

@Injectable({ providedIn: 'root' })
export class ClaudeChatService {
  constructor(
    private http: HttpClient,
    private apiConfig: ApiConfigService
  ) {}

  sendMessage(message: string) {
    return this.http
      .post<{ response: string }>(this.apiConfig.getFastApiEndpoint('/claude'), { message })
      .pipe(map(res => ({ reply: res.response })));
  }
}
