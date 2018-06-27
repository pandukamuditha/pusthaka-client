import { TestBed, inject } from '@angular/core/testing';

import { PatronService } from './patron.service';

describe('PatronService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PatronService]
    });
  });

  it('should be created', inject([PatronService], (service: PatronService) => {
    expect(service).toBeTruthy();
  }));
});
