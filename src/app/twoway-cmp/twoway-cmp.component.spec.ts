import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwowayCmpComponent } from './twoway-cmp.component';

describe('TwowayCmpComponent', () => {
  let component: TwowayCmpComponent;
  let fixture: ComponentFixture<TwowayCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwowayCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwowayCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
