import { TestBed } from '@angular/core/testing';

import { DeXuatService } from './de-xuat.service';

describe('DeXuatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeXuatService = TestBed.get(DeXuatService);
    expect(service).toBeTruthy();
  });
});
