import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesWrapperComponent } from './articles-wrapper.component';

describe('ArticlesWrapperComponent', () => {
  let component: ArticlesWrapperComponent;
  let fixture: ComponentFixture<ArticlesWrapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArticlesWrapperComponent]
    });
    fixture = TestBed.createComponent(ArticlesWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
