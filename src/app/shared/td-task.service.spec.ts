import { TestBed } from '@angular/core/testing';

import { TdTaskService } from './td-task.service';

describe('TdTaskService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TdTaskService = TestBed.get(TdTaskService);
    expect(service).toBeTruthy();
  });
});
