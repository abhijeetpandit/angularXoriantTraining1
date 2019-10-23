import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildCmp2Component } from './child-cmp2.component';

describe('ChildCmp2Component', () => {
  let component: ChildCmp2Component;
  let fixture: ComponentFixture<ChildCmp2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildCmp2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildCmp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
