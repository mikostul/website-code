import { TestBed, inject } from '@angular/core/testing';

import { TransfererService } from './transferer.service';

describe('TransfererService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TransfererService]
    });
  });

  it('should be created', inject([TransfererService], (service: TransfererService) => {
    expect(service).toBeTruthy();
  }));
});
