import { TestBed } from '@angular/core/testing';

import { AnalyticUserService } from './analyticUser.service';

describe('AnalyticUserService', () => {
  let service: AnalyticUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnalyticUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
