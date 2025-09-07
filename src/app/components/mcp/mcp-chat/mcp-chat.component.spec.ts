import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McpChatComponent } from './mcp-chat.component';

describe('McpChatComponent', () => {
  let component: McpChatComponent;
  let fixture: ComponentFixture<McpChatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [McpChatComponent]
    });
    fixture = TestBed.createComponent(McpChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
