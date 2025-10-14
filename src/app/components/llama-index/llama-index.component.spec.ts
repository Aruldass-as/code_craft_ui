import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlamaIndexComponent } from './llama-index.component';

describe('LlamaIndexComponent', () => {
  let component: LlamaIndexComponent;
  let fixture: ComponentFixture<LlamaIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LlamaIndexComponent]
    });
    fixture = TestBed.createComponent(LlamaIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
