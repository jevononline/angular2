import { TestBed, inject } from '@angular/core/testing';

import { StandardCommitteeService } from './standard-committee.service';

describe('StandardCommitteeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StandardCommitteeService]
    });
  });

  it('should be created', inject([StandardCommitteeService], (service: StandardCommitteeService) => {
    expect(service).toBeTruthy();
  }));
});
