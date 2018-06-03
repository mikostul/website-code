import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AenrollmentComponent } from './aenrollment.component';

describe('AenrollmentComponent', () => {
  let component: AenrollmentComponent;
  let fixture: ComponentFixture<AenrollmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AenrollmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AenrollmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
