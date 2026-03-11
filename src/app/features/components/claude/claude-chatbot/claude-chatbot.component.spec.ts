import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClaudeChatbotComponent } from './claude-chatbot.component';


describe('ChatbotComponent', () => {
  let component: ClaudeChatbotComponent;
  let fixture: ComponentFixture<ClaudeChatbotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClaudeChatbotComponent]
    });
    fixture = TestBed.createComponent(ClaudeChatbotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
