import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbhijeetReactiveFormComponent } from './abhijeet-reactive-form.component';

describe('AbhijeetReactiveFormComponent', () => {
  let component: AbhijeetReactiveFormComponent;
  let fixture: ComponentFixture<AbhijeetReactiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbhijeetReactiveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbhijeetReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
