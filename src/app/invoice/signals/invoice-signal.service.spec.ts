import { TestBed } from '@angular/core/testing';

import { InvoiceSignalService } from './invoice-signal.service';

describe('InvoiceSignalService', () => {
  let service: InvoiceSignalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvoiceSignalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
