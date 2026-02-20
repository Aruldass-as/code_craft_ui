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
    return this.http.post<any>(this.apiConfig.getFastApiEndpoint('/chat'), { message });
  }

  /** Stream chat response - emits chunks as they arrive for faster perceived response */
  sendMessageStream(message: string): Observable<string> {
    return new Observable<string>((subscriber) => {
      const url = this.apiConfig.getFastApiEndpoint('/chat/stream');
      const controller = new AbortController();

      fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
        signal: controller.signal,
      })
        .then(async (res) => {
          if (!res.ok) {
            const err = await res.json().catch(() => ({}));
            throw new Error(err.detail ?? res.statusText);
          }
          const reader = res.body!.getReader();
          const decoder = new TextDecoder();
          let buffer = '';
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            buffer += decoder.decode(value, { stream: true });
            const lines = buffer.split('\n');
            buffer = lines.pop() ?? '';
            for (const line of lines) {
              if (line.startsWith('data: ')) {
                try {
                  const data = JSON.parse(line.slice(6));
                  if (data.content) subscriber.next(data.content);
                  if (data.error) subscriber.error(new Error(data.error));
                } catch {
                  // skip malformed lines
                }
              }
            }
          }
          subscriber.complete();
        })
        .catch((err) => subscriber.error(err));

      return () => controller.abort();
    });
  }

  generateImage(prompt: string): Observable<any> {
    return this.http.post<any>(this.apiConfig.getFastApiEndpoint('/generate-image'), { prompt });
  }
}

