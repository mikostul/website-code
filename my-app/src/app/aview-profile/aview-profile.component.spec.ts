import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AviewProfileComponent } from './aview-profile.component';

describe('AviewProfileComponent', () => {
  let component: AviewProfileComponent;
  let fixture: ComponentFixture<AviewProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AviewProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AviewProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
