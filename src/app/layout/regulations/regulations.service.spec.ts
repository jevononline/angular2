import { TestBed, inject } from '@angular/core/testing';

import { RegulationsService } from './regulations.service';

describe('RegulationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegulationsService]
    });
  });

  it('should be created', inject([RegulationsService], (service: RegulationsService) => {
    expect(service).toBeTruthy();
  }));
});
