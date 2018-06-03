import { TestBed, async, inject } from '@angular/core/testing';

import { Data2Guard } from './data2.guard';

describe('Data2Guard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Data2Guard]
    });
  });

  it('should ...', inject([Data2Guard], (guard: Data2Guard) => {
    expect(guard).toBeTruthy();
  }));
});
