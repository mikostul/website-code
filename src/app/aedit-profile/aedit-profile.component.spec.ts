import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AeditProfileComponent } from './aedit-profile.component';

describe('AeditProfileComponent', () => {
  let component: AeditProfileComponent;
  let fixture: ComponentFixture<AeditProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AeditProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AeditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
