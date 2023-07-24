import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadlistsComponent } from './readlists.component';

describe('ReadlistsComponent', () => {
  let component: ReadlistsComponent;
  let fixture: ComponentFixture<ReadlistsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReadlistsComponent]
    });
    fixture = TestBed.createComponent(ReadlistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
