import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpDetailsHttpComponent } from './emp-details-http.component';

describe('EmpDetailsHttpComponent', () => {
  let component: EmpDetailsHttpComponent;
  let fixture: ComponentFixture<EmpDetailsHttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpDetailsHttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpDetailsHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
