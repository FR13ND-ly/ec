import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleDetailsTextComponent } from './article-details-text.component';

describe('ArticleDetailsTextComponent', () => {
  let component: ArticleDetailsTextComponent;
  let fixture: ComponentFixture<ArticleDetailsTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ArticleDetailsTextComponent]
    });
    fixture = TestBed.createComponent(ArticleDetailsTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
