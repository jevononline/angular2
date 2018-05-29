import { TestBed, inject } from '@angular/core/testing';

import { StandardNetworkService } from './standard-network.service';

describe('StandardNetworkService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StandardNetworkService]
    });
  });

  it('should be created', inject([StandardNetworkService], (service: StandardNetworkService) => {
    expect(service).toBeTruthy();
  }));
});
