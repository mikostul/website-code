import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartplanComponent } from './startplan.component';

describe('StartplanComponent', () => {
  let component: StartplanComponent;
  let fixture: ComponentFixture<StartplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
