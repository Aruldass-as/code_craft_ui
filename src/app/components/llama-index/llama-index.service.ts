import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiConfigService } from '../../services/api-config.service';

@Injectable({ providedIn: 'root' })
export class LlamaIndexService {
  constructor(
    private http: HttpClient,
    private apiConfig: ApiConfigService
  ) {}

  queryData(query: string): Observable<any> {
    return this.http.post(this.apiConfig.getFastApiEndpoint('/query'), { query });
  }
}
