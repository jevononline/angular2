import { TestBed, inject } from '@angular/core/testing';

import { GuidelinesService } from './guidelines.service';

describe('GuidelinesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuidelinesService]
    });
  });

  it('should be created', inject([GuidelinesService], (service: GuidelinesService) => {
    expect(service).toBeTruthy();
  }));
});
