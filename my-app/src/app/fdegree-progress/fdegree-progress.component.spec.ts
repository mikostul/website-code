import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FdegreeProgressComponent } from './fdegree-progress.component';

describe('FdegreeProgressComponent', () => {
  let component: FdegreeProgressComponent;
  let fixture: ComponentFixture<FdegreeProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FdegreeProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FdegreeProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
