import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetsSideComponent } from './widgets-side.component';

describe('WidgetsSideComponent', () => {
  let component: WidgetsSideComponent;
  let fixture: ComponentFixture<WidgetsSideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WidgetsSideComponent]
    });
    fixture = TestBed.createComponent(WidgetsSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
