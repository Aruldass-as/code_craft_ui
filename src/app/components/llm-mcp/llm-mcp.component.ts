import { Component } from '@angular/core';
import { LlmMcpService } from './llmmcp.service';

@Component({
  selector: 'app-llm-mcp',
  templateUrl: './llm-mcp.component.html',
  styleUrls: ['./llm-mcp.component.scss']
})
export class LlmMcpComponent {
taskDescription = '';
agentResult = '';

  constructor(private llmMcpService: LlmMcpService) {}

  runAgent() {
    this.llmMcpService.runAgent(this.taskDescription)
      .subscribe(
        res => this.agentResult = res.result,
        err => this.agentResult = 'Error running agent'
      );
  }
}
