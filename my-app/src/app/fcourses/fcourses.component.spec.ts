import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FcoursesComponent } from './fcourses.component';

describe('FcoursesComponent', () => {
  let component: FcoursesComponent;
  let fixture: ComponentFixture<FcoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FcoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FcoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
