import { TestBed } from '@angular/core/testing';

import { VisitTimelineService } from './visit-timeline.service';

describe('VisitTimelineService', () => {
  let service: VisitTimelineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisitTimelineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
