import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiConfigService } from '../../services/api-config.service';

@Injectable({ providedIn: 'root' })
export class ResearchAssistantService {
  constructor(
    private http: HttpClient,
    private apiConfig: ApiConfigService
  ) {}

  uploadFile(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(this.apiConfig.getFastApiEndpoint('/upload'), formData);
  }
}
