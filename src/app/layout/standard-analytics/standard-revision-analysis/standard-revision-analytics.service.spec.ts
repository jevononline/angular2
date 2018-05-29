import { TestBed, inject } from '@angular/core/testing';

import { StandardRevisionAnalyticsService } from './standard-revision-analytics.service';

describe('StandardRevisionAnalyticsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StandardRevisionAnalyticsService]
    });
  });

  it('should be created', inject([StandardRevisionAnalyticsService], (service: StandardRevisionAnalyticsService) => {
    expect(service).toBeTruthy();
  }));
});
