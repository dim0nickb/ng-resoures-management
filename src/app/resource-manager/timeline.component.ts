import { Component, OnInit, Input } from '@angular/core';
import { PeriodService } from './period.service';

@Component({
  selector: 'timeline',
  template: `
    <div class="flex-container">
      <div class="cursorable margin-1 padding-5 flex-item-1 center-text" (click)="showPreviousDays()">
        <i class="material-icons">keyboard_arrow_left</i>
      </div>

      <div class="flex-item-3 header center-text"
        *ngFor="let day of this.days; let i = index;">
          <div>{{ this.periodService.getOffsetDate(i) | date:'EEEEEE.' | russify }}</div>
          <div>{{ this.periodService.getOffsetDate(i) | date:'dd.MM' }}</div>
      </div>

      <div class="cursorable margin-1 padding-5 flex-item-1 center-text" (click)="showNextDays()">
        <i class="material-icons">keyboard_arrow_right</i>
      </div>

    </div>
  `,
  styleUrls: ['./styles.css']
})
export class TimelineComponent implements OnInit {

  days: Date[];
  constructor(private periodService: PeriodService) { }

  ngOnInit() {
    this.periodService.days
                      .subscribe( days => {
                        this.days = days;
                      });
    this.periodService.getPeriod();
  }

  showPreviousDays(): void {
    const newStartDtate = this.periodService.getOffsetDate(-this.periodService.daysFromNow);
    this.periodService.init(newStartDtate, this.periodService.daysFromNow);
  }
  showNextDays(): void {
    const newStartDtate = this.periodService.getOffsetDate(+this.periodService.daysFromNow);
    this.periodService.init(newStartDtate, this.periodService.daysFromNow);
  }
}
