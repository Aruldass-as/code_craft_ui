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
import { PerplexityChatService } from './components/perplexity/perplexity-chat.service';
import { HttpClientModule } from '@angular/common/http';
import { LlamaIndexService } from './components/llama-index/llama-index.service';
import { ResearchAssistantService } from './components/research-assistant/research-assistant.service';
import { WebScrapeService } from './components/web-scrape/web-scrape.service';
import { ApiConfigService } from './services/api-config.service';
// import { GoogleAuthService } from './services/google-auth.service';

// state-management component
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { productsReducer } from './components/state-component/products/state/products.reducer';
import { ProductsEffects } from './components/state-component/products/state/products.effects';

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

    // state-management component
    StoreModule.forRoot({
      products: productsReducer
    }),
    EffectsModule.forRoot([ProductsEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25 })
  ],
  providers: [
    ServiceProviderService,
    OpenAIService,
    ClaudeChatService,
    GeminiChatService,
    PerplexityChatService,
    LlamaIndexService,
    ResearchAssistantService,
    WebScrapeService
    // GoogleAuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
