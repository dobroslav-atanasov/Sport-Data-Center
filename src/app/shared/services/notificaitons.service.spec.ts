import { TestBed } from '@angular/core/testing';

import { NotificaitonsService } from './notificaitons.service';

describe('NotificaitonsService', () => {
  let service: NotificaitonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotificaitonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
