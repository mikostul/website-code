import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DegreeprogressComponent } from './degreeprogress.component';

describe('DegreeprogressComponent', () => {
  let component: DegreeprogressComponent;
  let fixture: ComponentFixture<DegreeprogressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DegreeprogressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DegreeprogressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
