import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VisitTimelineService {
  monthsArray = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec'
  ];

  constructor() { }

  getMonthNameById(id: number): string {
    return this.monthsArray[id];
  }
}
