import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormCmpComponent } from './reactive-form-cmp.component';

describe('ReactiveFormCmpComponent', () => {
  let component: ReactiveFormCmpComponent;
  let fixture: ComponentFixture<ReactiveFormCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
