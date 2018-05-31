import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FstartPlanComponent } from './fstart-plan.component';

describe('FstartPlanComponent', () => {
  let component: FstartPlanComponent;
  let fixture: ComponentFixture<FstartPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FstartPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FstartPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
