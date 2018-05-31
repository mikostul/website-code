import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdegreeProgressComponent } from './adegree-progress.component';

describe('AdegreeProgressComponent', () => {
  let component: AdegreeProgressComponent;
  let fixture: ComponentFixture<AdegreeProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdegreeProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdegreeProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
