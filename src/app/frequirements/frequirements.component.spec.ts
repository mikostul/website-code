import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequirementsComponent } from './frequirements.component';

describe('FrequirementsComponent', () => {
  let component: FrequirementsComponent;
  let fixture: ComponentFixture<FrequirementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrequirementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrequirementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
