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

  constructor(private llama: LlamaIndexService) {}

  sendQuery() {
    if (!this.userQuery.trim()) return;

    this.llama.queryData(this.userQuery).subscribe({
      next: (res) => this.response = res.response,
      error: (err) => this.response = 'Error: ' + err.message
    });
  }
}
