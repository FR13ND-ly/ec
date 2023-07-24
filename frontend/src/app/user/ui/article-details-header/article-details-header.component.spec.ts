import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleDetailsHeaderComponent } from './article-details-header.component';

describe('ArticleDetailsHeaderComponent', () => {
  let component: ArticleDetailsHeaderComponent;
  let fixture: ComponentFixture<ArticleDetailsHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ArticleDetailsHeaderComponent]
    });
    fixture = TestBed.createComponent(ArticleDetailsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
