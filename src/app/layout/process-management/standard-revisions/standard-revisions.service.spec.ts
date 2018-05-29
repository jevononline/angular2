import { TestBed, inject } from '@angular/core/testing';

import { StandardRevisionsService } from './standard-revisions.service';

describe('StandardRevisionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StandardRevisionsService]
    });
  });

  it('should be created', inject([StandardRevisionsService], (service: StandardRevisionsService) => {
    expect(service).toBeTruthy();
  }));
});
