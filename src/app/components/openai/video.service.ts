import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiConfigService } from '../../services/api-config.service';


@Injectable({ providedIn: 'root' })

export class VideoGenService {
  constructor(
    private http: HttpClient,
    private apiConfig: ApiConfigService
  ) {}

  generateVideo(prompt: string) {
    return this.http.post<{ apiFileId: string }>(this.apiConfig.getFastApiEndpoint('/generate-video'), { prompt });
  }

  checkStatus(id: string) {
    return this.http.get<{ status: string, apiFileSignedUrl?: string }>(this.apiConfig.getFastApiEndpoint(`/video-status/${id}`));
  }
}
