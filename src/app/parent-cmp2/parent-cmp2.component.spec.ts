import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentCmp2Component } from './parent-cmp2.component';

describe('ParentCmp2Component', () => {
  let component: ParentCmp2Component;
  let fixture: ComponentFixture<ParentCmp2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentCmp2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentCmp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
