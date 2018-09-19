import { TestBed, inject } from '@angular/core/testing';

import { StarttestserviceService } from './starttestservice.service';

describe('StarttestserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StarttestserviceService]
    });
  });

  it('should be created', inject([StarttestserviceService], (service: StarttestserviceService) => {
    expect(service).toBeTruthy();
  }));
});
