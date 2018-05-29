import { TestBed, inject } from '@angular/core/testing';

import { StandardCommitteeTicketsService } from './standard-committee-tickets.service';

describe('StandardCommitteeTicketsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StandardCommitteeTicketsService]
    });
  });

  it('should be created', inject([StandardCommitteeTicketsService], (service: StandardCommitteeTicketsService) => {
    expect(service).toBeTruthy();
  }));
});
