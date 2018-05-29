import { TestBed, inject } from '@angular/core/testing';

import { SystemOrgTicketsService } from './system-org-tickets.service';

describe('SystemOrgTicketsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SystemOrgTicketsService]
    });
  });

  it('should be created', inject([SystemOrgTicketsService], (service: SystemOrgTicketsService) => {
    expect(service).toBeTruthy();
  }));
});
