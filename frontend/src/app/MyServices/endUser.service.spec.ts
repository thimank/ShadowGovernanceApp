import { TestBed } from '@angular/core/testing';

import { EndUserService } from './endUser.service';

describe('EndUserService', () => {
  let service: EndUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EndUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
