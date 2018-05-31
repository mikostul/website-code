import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AremoveUserComponent } from './aremove-user.component';

describe('AremoveUserComponent', () => {
  let component: AremoveUserComponent;
  let fixture: ComponentFixture<AremoveUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AremoveUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AremoveUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
