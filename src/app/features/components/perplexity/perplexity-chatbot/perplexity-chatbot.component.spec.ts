import { ComponentFixture, TestBed } from '@angular/core/testing';
import { perplexityChatbotComponent } from './perplexity-chatbot.component';


describe('ChatbotComponent', () => {
  let component: perplexityChatbotComponent;
  let fixture: ComponentFixture<perplexityChatbotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [perplexityChatbotComponent]
    });
    fixture = TestBed.createComponent(perplexityChatbotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
