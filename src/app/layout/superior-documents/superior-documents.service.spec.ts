import { TestBed, inject } from '@angular/core/testing';

import { SuperiorDocumentsService } from './superior-documents.service';

describe('SuperiorDocumentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SuperiorDocumentsService]
    });
  });

  it('should be created', inject([SuperiorDocumentsService], (service: SuperiorDocumentsService) => {
    expect(service).toBeTruthy();
  }));
});
