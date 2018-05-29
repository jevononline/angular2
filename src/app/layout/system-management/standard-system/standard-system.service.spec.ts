import { TestBed, inject } from '@angular/core/testing';

import { StandardSystemService } from './standard-system.service';

describe('StandardSystemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StandardSystemService]
    });
  });

  it('should be created', inject([StandardSystemService], (service: StandardSystemService) => {
    expect(service).toBeTruthy();
  }));
});
