import { TestBed, inject } from '@angular/core/testing';

import { PostStandardAssociationsService } from './post-standard-associations.service';

describe('PostStandardAssociationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostStandardAssociationsService]
    });
  });

  it('should be created', inject([PostStandardAssociationsService], (service: PostStandardAssociationsService) => {
    expect(service).toBeTruthy();
  }));
});
