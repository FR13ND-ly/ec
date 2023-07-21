import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleFeedComponent } from './article-feed.component';

describe('ArticleFeedComponent', () => {
  let component: ArticleFeedComponent;
  let fixture: ComponentFixture<ArticleFeedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ArticleFeedComponent]
    });
    fixture = TestBed.createComponent(ArticleFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
