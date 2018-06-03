import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DegreePlanFormComponent } from './degree-plan-form.component';

describe('DegreePlanFormComponent', () => {
  let component: DegreePlanFormComponent;
  let fixture: ComponentFixture<DegreePlanFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DegreePlanFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DegreePlanFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
