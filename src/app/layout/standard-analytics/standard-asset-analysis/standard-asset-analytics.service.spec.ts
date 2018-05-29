import { TestBed, inject } from '@angular/core/testing';

import { StandardAssetAnalyticsService } from './standard-asset-analytics.service';

describe('StandardAssetAnalyticsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StandardAssetAnalyticsService]
    });
  });

  it('should be created', inject([StandardAssetAnalyticsService], (service: StandardAssetAnalyticsService) => {
    expect(service).toBeTruthy();
  }));
});
