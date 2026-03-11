import { Component } from '@angular/core';
import { LlamaIndexService } from './llama-index.service';

@Component({
  selector: 'app-llama-index',
  templateUrl: './llama-index.component.html',
  styleUrls: ['./llama-index.component.scss']
})
export class LlamaIndexComponent {
  userQuery = '';
  response = '';
  loading = false;

  constructor(private llama: LlamaIndexService) {}

  sendQuery() {
    this.loading = true;
    if (!this.userQuery.trim()) return;
    this.llama.queryData(this.userQuery).subscribe({
      next: (res) => {
        this.response = res.response;
        this.loading = false;
      },
      error: (err) => {
        this.response = err.error.error;
        this.loading = false;
      }
    });
  }
}
