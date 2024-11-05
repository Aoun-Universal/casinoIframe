import { TestBed } from '@angular/core/testing';

import { ConditionHandlerService } from './condition-handler.service';

describe('ConditionHandlerService', () => {
  let service: ConditionHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConditionHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
