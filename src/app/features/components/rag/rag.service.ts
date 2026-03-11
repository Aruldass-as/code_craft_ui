import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfigService } from '../../services/api-config.service';

@Injectable({
  providedIn: 'root'
})
export class RagService {
  constructor(
    private http: HttpClient,
    private apiConfig: ApiConfigService
  ) {}

  uploadFile(file: File) {
    const fd = new FormData();
    fd.append('file', file);
    return this.http.post(this.apiConfig.getFastApiEndpoint('/upload'), fd);
  }

  ask(question: string) {
    return this.http.post<{ reply: string }>(this.apiConfig.getFastApiEndpoint('/api/query'), { question });
  }
}
