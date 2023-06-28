import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSidebarComponent } from './search-sidebar.component';

describe('SearchSidebarComponent', () => {
  let component: SearchSidebarComponent;
  let fixture: ComponentFixture<SearchSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchSidebarComponent]
    });
    fixture = TestBed.createComponent(SearchSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
