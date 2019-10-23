import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildCmp1Component } from './child-cmp1.component';

describe('ChildCmp1Component', () => {
  let component: ChildCmp1Component;
  let fixture: ComponentFixture<ChildCmp1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildCmp1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildCmp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
