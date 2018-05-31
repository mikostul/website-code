import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AprogramsComponent } from './aprograms.component';

describe('AprogramsComponent', () => {
  let component: AprogramsComponent;
  let fixture: ComponentFixture<AprogramsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AprogramsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AprogramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
