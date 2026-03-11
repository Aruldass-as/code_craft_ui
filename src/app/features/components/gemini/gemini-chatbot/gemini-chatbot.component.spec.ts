import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeminiChatbotComponent } from './gemini-chatbot.component';

describe('ChatbotComponent', () => {
  let component: GeminiChatbotComponent;
  let fixture: ComponentFixture<GeminiChatbotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeminiChatbotComponent]
    });
    fixture = TestBed.createComponent(GeminiChatbotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
