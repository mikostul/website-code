import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsearchIdComponent } from './asearch-id.component';

describe('AsearchIdComponent', () => {
  let component: AsearchIdComponent;
  let fixture: ComponentFixture<AsearchIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsearchIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsearchIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
