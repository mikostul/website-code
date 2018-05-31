import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AstudentsComponent } from './astudents.component';

describe('AstudentsComponent', () => {
  let component: AstudentsComponent;
  let fixture: ComponentFixture<AstudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AstudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AstudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
