import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentCmp1Component } from './parent-cmp1.component';

describe('ParentCmp1Component', () => {
  let component: ParentCmp1Component;
  let fixture: ComponentFixture<ParentCmp1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentCmp1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentCmp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
