import { TestBed, inject } from '@angular/core/testing';

import { FileViewerService } from './file-viewer.service';

describe('FileViewerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FileViewerService]
    });
  });

  it('should be created', inject([FileViewerService], (service: FileViewerService) => {
    expect(service).toBeTruthy();
  }));
});
