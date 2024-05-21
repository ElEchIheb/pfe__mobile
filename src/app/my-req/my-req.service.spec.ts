import { TestBed } from '@angular/core/testing';

import { MyReqService } from './my-req.service';

describe('MyReqService', () => {
  let service: MyReqService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyReqService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
