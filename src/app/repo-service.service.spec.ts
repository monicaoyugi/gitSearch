import { TestBed } from '@angular/core/testing';

import { RepoServiceService } from './repo-service.service';

describe('RepoServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RepoServiceService = TestBed.get(RepoServiceService);
    expect(service).toBeTruthy();
  });
});
