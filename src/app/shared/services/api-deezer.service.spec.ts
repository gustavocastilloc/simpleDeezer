import { TestBed } from '@angular/core/testing';

import { ApiDeezerService } from './api-deezer.service';

describe('ApiDeezerService', () => {
  let service: ApiDeezerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiDeezerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
