import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiConversationComponent } from './ai-conversation.component';

describe('AiConversationComponent', () => {
  let component: AiConversationComponent;
  let fixture: ComponentFixture<AiConversationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AiConversationComponent]
    });
    fixture = TestBed.createComponent(AiConversationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
