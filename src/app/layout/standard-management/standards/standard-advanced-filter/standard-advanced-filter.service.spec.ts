import { TestBed, inject } from '@angular/core/testing';

import { StandardAdvancedFilterService } from './standard-advanced-filter.service';

describe('StandardAdvancedFilterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StandardAdvancedFilterService]
    });
  });

  it('should be created', inject([StandardAdvancedFilterService], (service: StandardAdvancedFilterService) => {
    expect(service).toBeTruthy();
  }));
});
