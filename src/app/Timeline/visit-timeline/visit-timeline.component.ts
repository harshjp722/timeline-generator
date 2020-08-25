import { Component, OnInit } from '@angular/core';
import { VisitTimelineService } from '../visit-timeline.service';

@Component({
  selector: 'app-visit-timeline',
  templateUrl: './visit-timeline.component.html',
  styleUrls: ['./visit-timeline.component.css']
})
export class VisitTimelineComponent implements OnInit {
  timeLineArray = [];
  constructor(private visitTimelineService: VisitTimelineService) { }

  ngOnInit(): void {
    this.getTimeLineArray();
  }

  getTimeLineArray() {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    // const timeLineArray = [];
    for (let index = 0; index < 12; index++) {
      let month = currentMonth - index;
      let year = currentDate.getFullYear();
      if (month < 0) {
        month = month + 12;
        year = year - 1;
      }
      this.timeLineArray[index] = { month, year, monthName: this.visitTimelineService.getMonthNameById(month) };
      console.log(this.timeLineArray);
    }
  }

}
