import { TestBed, inject } from '@angular/core/testing';

import { StandardNetworkTicketsService } from './standard-network-tickets.service';

describe('StandardNetworkTicketsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StandardNetworkTicketsService]
    });
  });

  it('should be created', inject([StandardNetworkTicketsService], (service: StandardNetworkTicketsService) => {
    expect(service).toBeTruthy();
  }));
});
