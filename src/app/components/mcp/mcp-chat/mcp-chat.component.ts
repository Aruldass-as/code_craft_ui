import { Component } from '@angular/core';
import { McpService } from '../mcp.service';
import { GoogleAuthService } from 'src/app/services/google-auth.service';

@Component({
  selector: 'app-mcp-chat',
  templateUrl: './mcp-chat.component.html',
  styleUrls: ['./mcp-chat.component.scss']
})
export class McpChatComponent {
  question = '';
  answer = '';
  events: any[] = [];
  emails: any[] = [];
  dbResults: any[] = [];
  authToken: string | null = null;


  constructor(private googleAuth: GoogleAuthService, private mcpService: McpService) {}

  async login() {
    this.authToken = await this.googleAuth.signIn();
  }

  askAI() {
    this.mcpService.ask(this.question).subscribe({
      next: (res) => this.answer = res.response,
      error: (err) => console.error(err)
    });
  }


  loadCalendar() {
    const fakeToken = 'YOUR_GOOGLE_AUTH_TOKEN'; // Replace with real auth
    this.mcpService.askCalendar(fakeToken).subscribe({
      next: (res) => this.events = res,
      error: (err) => console.error(err)
    });
  }


  loadGmail() {
    const fakeToken = 'YOUR_GOOGLE_AUTH_TOKEN'; // Replace with real auth
    this.mcpService.askGmail(fakeToken).subscribe({
      next: (res) => this.emails = res,
      error: (err) => console.error(err)
    });
  }


  queryDatabase() {
    this.mcpService.askDatabase('SELECT * FROM users LIMIT 5').subscribe({
      next: (res) => this.dbResults = res,
      error: (err) => console.error(err)
    });
  }

}
