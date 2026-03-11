import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebScrapeComponent } from './web-scrape.component';

describe('WebScrapeComponent', () => {
  let component: WebScrapeComponent;
  let fixture: ComponentFixture<WebScrapeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebScrapeComponent]
    });
    fixture = TestBed.createComponent(WebScrapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
