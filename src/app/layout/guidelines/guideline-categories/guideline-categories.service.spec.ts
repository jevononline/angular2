import { TestBed, inject } from '@angular/core/testing';

import { GuidelineCategoriesService } from './guideline-categories.service';

describe('GuidelineCategoriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuidelineCategoriesService]
    });
  });

  it('should be created', inject([GuidelineCategoriesService], (service: GuidelineCategoriesService) => {
    expect(service).toBeTruthy();
  }));
});
