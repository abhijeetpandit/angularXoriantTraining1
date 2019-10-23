import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentParentCmp1Component } from './assignment-parent-cmp1.component';

describe('AssignmentParentCmp1Component', () => {
  let component: AssignmentParentCmp1Component;
  let fixture: ComponentFixture<AssignmentParentCmp1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentParentCmp1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentParentCmp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
