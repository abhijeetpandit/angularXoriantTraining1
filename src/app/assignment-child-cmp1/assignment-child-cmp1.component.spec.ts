import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentChildCmp1Component } from './assignment-child-cmp1.component';

describe('AssignmentChildCmp1Component', () => {
  let component: AssignmentChildCmp1Component;
  let fixture: ComponentFixture<AssignmentChildCmp1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentChildCmp1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentChildCmp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
