import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ApiConfigService {
  /** Node.js backend (OpenAI, Claude, Gemini, Perplexity, MCP, etc.) */
  readonly nodeApiUrl = environment.apiUrl?.replace(/\/$/, '') || 'https://code-craft-backend-jy7x.onrender.com';

  /** FastAPI backend (LlamaIndex, fitness, web scrape, docs assist) */
  readonly fastApiUrl = environment.fastApiUrl || 'https://fastapi-app-36j5.onrender.com';

  getNodeEndpoint(path: string): string {
    const base = this.nodeApiUrl.replace(/\/api\/?$/, '');
    const p = path.startsWith('/') ? path : `/${path}`;
    return p.startsWith('/api') ? `${base}${p}` : `${base}/api${p}`;
  }

  getFastApiEndpoint(path: string): string {
    const base = this.fastApiUrl.replace(/\/$/, '');
    return path.startsWith('/') ? `${base}${path}` : `${base}/${path}`;
  }
}
