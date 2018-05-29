import { TestBed, inject } from '@angular/core/testing';

import { RegulationCategoriesService } from './regulation-categories.service';

describe('RegulationCategoriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegulationCategoriesService]
    });
  });

  it('should be created', inject([RegulationCategoriesService], (service: RegulationCategoriesService) => {
    expect(service).toBeTruthy();
  }));
});
