import { TestBed } from '@angular/core/testing';

import { ZuordnungService } from './zuordnung.service';

describe('ZuordnungService', () => {
  let service: ZuordnungService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZuordnungService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
