import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FviewProfileComponent } from './fview-profile.component';

describe('FviewProfileComponent', () => {
  let component: FviewProfileComponent;
  let fixture: ComponentFixture<FviewProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FviewProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FviewProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
