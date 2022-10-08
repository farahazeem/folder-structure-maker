import { TestBed } from '@angular/core/testing';

import { MatFolderService } from './mat-folder.service';

describe('MatFolderService', () => {
  let service: MatFolderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatFolderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
