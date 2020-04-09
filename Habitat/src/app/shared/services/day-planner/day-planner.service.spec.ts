import { TestBed } from '@angular/core/testing';

import { DayPlannerService } from './day-planner.service';

describe('DayPlannerService', () => {
  let service: DayPlannerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DayPlannerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
