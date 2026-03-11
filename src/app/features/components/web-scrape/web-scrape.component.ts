import { Component } from '@angular/core';
import { WebScrapeService } from './web-scrape.service';

// interface ScrapeResult {
//   url: string;
//   success: boolean;
//   data?: string;
//   error?: string;
// }

// interface ScrapeResponse {
//   success: boolean;
//   count: number;
//   results: ScrapeResult[];
// }

interface ImportantLink {
  name: string;
  url?: string | null;
}

interface ContactInfo {
  email?: string | null;
  phone?: string | null;
}

interface ScrapeResult {
  url: string;
  success: boolean;
  data?: {
    Title: string;
    Headings: string[];
    Summary: string;
    ImportantLinks: ImportantLink[];
    Tables: any[];
    ContactInfo: ContactInfo;
  } | string;
  error?: string;
}


@Component({
  selector: 'app-web-scrape',
  templateUrl: './web-scrape.component.html',
  styleUrls: ['./web-scrape.component.scss']
})

export class WebScrapeComponent {
  
  urlInput = '';
  results: ScrapeResult[] = [];
  loading = false;

  constructor(private scrapeService: WebScrapeService) {}

  scrapeMultiple() {
    const urls = this.urlInput
      .split('\n')
      .map(u => u.trim())
      .filter(u => u.length > 0);

    if (urls.length === 0) return;

    this.loading = true;
    this.scrapeService.scrapeMultiple(urls).subscribe(
      res => {
        // Parse stringified JSON if necessary
        this.results = res.results.map(r => {
          if (r.data && typeof r.data === 'string') {
            try {
              return { ...r, data: JSON.parse(r.data) };
            } catch {
              return r;
            }
          }
          return r;
        });
        this.loading = false;
      },
      err => {
        console.error(err);
        this.loading = false;
      }
    );
  }

  // ✅ Add this type guard method inside your component class
  dataIsObject(
    data: any
  ): data is {
    Title: string;
    Headings: string[];
    Summary: string;
    ImportantLinks: ImportantLink[];
    Tables: any[];
    ContactInfo: ContactInfo;
  } {
    return typeof data === 'object' && data !== null && 'Title' in data;
  }
}
