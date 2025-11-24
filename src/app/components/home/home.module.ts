import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AiConversationComponent } from '../openai/ai-conversation/ai-conversation.component';
import { ChatbotComponent } from '../openai/chatbot/chatbot.component';
import { ImageGenerateComponent } from '../openai/image-generate/image-generate.component';
import { VoiceRecognitionComponent } from '../openai/voice-recognition/voice-recognition.component';
import { VideoGenComponent } from '../openai/video-gen/video-gen.component';
import { GeminiChatbotComponent } from '../gemini/gemini-chatbot/gemini-chatbot.component';
import { ClaudeChatbotComponent } from '../claude/claude-chatbot/claude-chatbot.component';
import { PerplexityChatbotComponent } from '../perplexity/perplexity-chatbot/perplexity-chatbot.component';
import { McpChatComponent } from '../mcp/mcp-chat/mcp-chat.component';
import { LlmMcpComponent } from '../llm-mcp/llm-mcp.component';
import { RagComponent } from '../rag/rag-chat/rag.component';
import { LlamaIndexComponent } from '../llama-index/llama-index.component';
import { FitnessComponent } from '../fitness/fitness.component';
import { ResearchAssistantComponent } from '../research-assistant/research-assistant.component';

// state-management component
import { ProductsComponent } from '../state-component/products/products.component';

@NgModule({
  declarations: [
    HomeComponent,
    AiConversationComponent,
    ChatbotComponent,
    ImageGenerateComponent,
    VoiceRecognitionComponent,
    VideoGenComponent,
    GeminiChatbotComponent,
    ClaudeChatbotComponent,
    PerplexityChatbotComponent,
    McpChatComponent,
    LlmMcpComponent,
    RagComponent,
    LlamaIndexComponent,
    FitnessComponent,
    ResearchAssistantComponent,

    // state-management component
    ProductsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})

export class HomeModule { }
