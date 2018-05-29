import { TestBed, inject } from '@angular/core/testing';

import { StandardLogsService } from './standard-logs.service';

describe('StandardLogsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StandardLogsService]
    });
  });

  it('should be created', inject([StandardLogsService], (service: StandardLogsService) => {
    expect(service).toBeTruthy();
  }));
});
