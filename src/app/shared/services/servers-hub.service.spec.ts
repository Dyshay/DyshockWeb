import { TestBed } from '@angular/core/testing';

import { ServersHubService } from './servers-hub.service';

describe('ServersHubService', () => {
  let service: ServersHubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServersHubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
