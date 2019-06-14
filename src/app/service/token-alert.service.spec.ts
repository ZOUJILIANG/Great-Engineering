import { TestBed, inject } from '@angular/core/testing';

import { TokenAlertService } from './token-alert.service';

describe('TokenAlertService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TokenAlertService]
    });
  });

  it('should be created', inject([TokenAlertService], (service: TokenAlertService) => {
    expect(service).toBeTruthy();
  }));
});
