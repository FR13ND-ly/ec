import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleDetailsActionsComponent } from './article-details-actions.component';

describe('ArticleDetailsActionsComponent', () => {
  let component: ArticleDetailsActionsComponent;
  let fixture: ComponentFixture<ArticleDetailsActionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ArticleDetailsActionsComponent]
    });
    fixture = TestBed.createComponent(ArticleDetailsActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
