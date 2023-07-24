import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleDetailsChaptersComponent } from './article-details-chapters.component';

describe('ArticleDetailsChaptersComponent', () => {
  let component: ArticleDetailsChaptersComponent;
  let fixture: ComponentFixture<ArticleDetailsChaptersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ArticleDetailsChaptersComponent]
    });
    fixture = TestBed.createComponent(ArticleDetailsChaptersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
