import { TestBed, async, inject } from '@angular/core/testing';

import { Data3Guard } from './data3.guard';

describe('Data3Guard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Data3Guard]
    });
  });

  it('should ...', inject([Data3Guard], (guard: Data3Guard) => {
    expect(guard).toBeTruthy();
  }));
});
