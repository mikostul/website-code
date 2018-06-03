import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArequirementsComponent } from './arequirements.component';

describe('ArequirementsComponent', () => {
  let component: ArequirementsComponent;
  let fixture: ComponentFixture<ArequirementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArequirementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArequirementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
