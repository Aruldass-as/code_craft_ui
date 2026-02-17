import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ApiConfigService {
  /** FastAPI backend (all features: OpenAI, Claude, Gemini, Perplexity, LlamaIndex, etc.) */
  readonly fastApiUrl = environment.fastApiUrl ?? 'http://localhost:8000';

  /** @deprecated Use getFastApiEndpoint - Node.js backend replaced by FastAPI */
  getNodeEndpoint(path: string): string {
    return this.getFastApiEndpoint(path);
  }

  getFastApiEndpoint(path: string): string {
    const base = this.fastApiUrl.replace(/\/$/, '');
    return path.startsWith('/') ? `${base}${path}` : `${base}/${path}`;
  }
}
