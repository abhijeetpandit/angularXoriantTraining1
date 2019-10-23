import { TestBed } from '@angular/core/testing';

import { EmpServiceHttpService } from './emp-service-http.service';

describe('EmpServiceHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmpServiceHttpService = TestBed.get(EmpServiceHttpService);
    expect(service).toBeTruthy();
  });
});
