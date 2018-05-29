import { TestBed, inject } from '@angular/core/testing';

import { StandardUsageAnalyticsService } from './standard-usage-analytics.service';

describe('StandardUsageAnalyticsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StandardUsageAnalyticsService]
    });
  });

  it('should be created', inject([StandardUsageAnalyticsService], (service: StandardUsageAnalyticsService) => {
    expect(service).toBeTruthy();
  }));
});
