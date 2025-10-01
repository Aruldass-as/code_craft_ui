import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ServiceProviderService } from './services/service-provider.service';
import { OpenAIService } from './components/openai/openai.service';
import { ClaudeChatService } from './components/claude/claude-chat.service';
import { GeminiChatService } from './components/gemini/gemini-chat.service';
import { LlmMcpService } from './components/llm-mcp/llmmcp.service';
import { PerplexityChatService } from './components/perplexity/perplexity-chat.service';
import { HttpClientModule } from '@angular/common/http';
import { McpService } from './components/mcp/mcp.service';
import { RagService } from './components/rag/rag.service';
// import { GoogleAuthService } from './services/google-auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    ServiceProviderService,
    OpenAIService,
    McpService,
    ClaudeChatService,
    GeminiChatService,
    LlmMcpService,
    PerplexityChatService,
    RagService
    // GoogleAuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
