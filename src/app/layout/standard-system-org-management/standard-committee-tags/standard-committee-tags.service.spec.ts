import { TestBed, inject } from '@angular/core/testing';

import { StandardCommitteeTagsService } from './standard-committee-tags.service';

describe('StandardCommitteeTagsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StandardCommitteeTagsService]
    });
  });

  it('should be created', inject([StandardCommitteeTagsService], (service: StandardCommitteeTagsService) => {
    expect(service).toBeTruthy();
  }));
});
