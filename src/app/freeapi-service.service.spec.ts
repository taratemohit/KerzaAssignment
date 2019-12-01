import { TestBed } from '@angular/core/testing';

import { FreeapiServiceService } from './freeapi-service.service';

describe('FreeapiServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FreeapiServiceService = TestBed.get(FreeapiServiceService);
    expect(service).toBeTruthy();
  });
});
