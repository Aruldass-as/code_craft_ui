import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoGenComponent } from './video-gen.component';

describe('VideoGenComponent', () => {
  let component: VideoGenComponent;
  let fixture: ComponentFixture<VideoGenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoGenComponent]
    });
    fixture = TestBed.createComponent(VideoGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
