import { TestBed, inject } from '@angular/core/testing';

import { ProcessesService } from './processes.service';

describe('ProcessesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProcessesService]
    });
  });

  it('should be created', inject([ProcessesService], (service: ProcessesService) => {
    expect(service).toBeTruthy();
  }));
});
