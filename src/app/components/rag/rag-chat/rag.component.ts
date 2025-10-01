import { Component } from '@angular/core';
import { RagService } from '../rag.service';

@Component({
  selector: 'app-rag',
  templateUrl: './rag.component.html',
  styleUrls: ['./rag.component.scss']
})

export class RagComponent {
  question = '';
  answer = '';
  sources: any[] = [];
  
  constructor(private svc: RagService) {}

  send() {
    this.svc.ask(this.question).subscribe((res: any) => {
      this.answer = res.answer;
      this.sources = res.sources || [];
    });
  }
}
