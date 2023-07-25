import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadlistsDetailsComponent } from './readlists-details.component';

describe('ReadlistsDetailsComponent', () => {
  let component: ReadlistsDetailsComponent;
  let fixture: ComponentFixture<ReadlistsDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReadlistsDetailsComponent]
    });
    fixture = TestBed.createComponent(ReadlistsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
