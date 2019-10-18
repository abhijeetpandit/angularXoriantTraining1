import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyCmpComponent } from './property-cmp.component';

describe('PropertyCmpComponent', () => {
  let component: PropertyCmpComponent;
  let fixture: ComponentFixture<PropertyCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
