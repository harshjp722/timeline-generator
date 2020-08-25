import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitTimelineComponent } from './visit-timeline.component';

describe('VisitTimelineComponent', () => {
  let component: VisitTimelineComponent;
  let fixture: ComponentFixture<VisitTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
