import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlmMcpComponent } from './llm-mcp.component';

describe('LlmMcpComponent', () => {
  let component: LlmMcpComponent;
  let fixture: ComponentFixture<LlmMcpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LlmMcpComponent]
    });
    fixture = TestBed.createComponent(LlmMcpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
