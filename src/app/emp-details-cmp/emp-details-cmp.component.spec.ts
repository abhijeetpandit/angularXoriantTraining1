import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpDetailsCmpComponent } from './emp-details-cmp.component';

describe('EmpDetailsCmpComponent', () => {
  let component: EmpDetailsCmpComponent;
  let fixture: ComponentFixture<EmpDetailsCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpDetailsCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpDetailsCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
