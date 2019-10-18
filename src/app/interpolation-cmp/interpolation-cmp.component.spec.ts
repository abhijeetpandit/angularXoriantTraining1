import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpolationCmpComponent } from './interpolation-cmp.component';

describe('InterpolationCmpComponent', () => {
  let component: InterpolationCmpComponent;
  let fixture: ComponentFixture<InterpolationCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterpolationCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterpolationCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
