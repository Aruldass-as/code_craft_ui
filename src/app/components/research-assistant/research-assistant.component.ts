import { Component } from '@angular/core';
import { ResearchAssistantService } from './research-assistant.service';

@Component({
  selector: 'app-research-assistant',
  templateUrl: './research-assistant.component.html',
  styleUrls: ['./research-assistant.component.scss']
})
export class ResearchAssistantComponent {
summary: string = '';
  graphData: any;
  loading = false;

  constructor(private researchAssistantService: ResearchAssistantService) {}

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (!file) return;

    this.loading = true;
    this.researchAssistantService.uploadFile(file).subscribe(res => {
      this.summary = res.summary;
      this.graphData = res.graph;
      this.loading = false;
      console.log(this.graphData); // visualize later
    });
  }
}
