import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AstartPlanComponent } from './astart-plan.component';

describe('AstartPlanComponent', () => {
  let component: AstartPlanComponent;
  let fixture: ComponentFixture<AstartPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AstartPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AstartPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
