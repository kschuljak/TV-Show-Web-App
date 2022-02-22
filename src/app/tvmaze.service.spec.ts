import { TestBed } from '@angular/core/testing';

import { TvmazeService } from './tvmaze.service';

describe('TvmazeService', () => {
  let service: TvmazeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TvmazeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
