import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeditProfileComponent } from './fedit-profile.component';

describe('FeditProfileComponent', () => {
  let component: FeditProfileComponent;
  let fixture: ComponentFixture<FeditProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeditProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
