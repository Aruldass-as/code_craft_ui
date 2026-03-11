import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageGenerateComponent } from './image-generate.component';

describe('ImageGenerateComponent', () => {
  let component: ImageGenerateComponent;
  let fixture: ComponentFixture<ImageGenerateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageGenerateComponent]
    });
    fixture = TestBed.createComponent(ImageGenerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
