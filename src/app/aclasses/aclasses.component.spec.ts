import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AclassesComponent } from './aclasses.component';

describe('AclassesComponent', () => {
  let component: AclassesComponent;
  let fixture: ComponentFixture<AclassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AclassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AclassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
