import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbhijeetTemplateDrivenFormComponent } from './abhijeet-template-driven-form.component';

describe('AbhijeetTemplateDrivenFormComponent', () => {
  let component: AbhijeetTemplateDrivenFormComponent;
  let fixture: ComponentFixture<AbhijeetTemplateDrivenFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbhijeetTemplateDrivenFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbhijeetTemplateDrivenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
