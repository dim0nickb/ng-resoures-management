import { Component, OnInit, Input } from '@angular/core';
import { PeriodService } from './period.service';
import { Resource } from './resource';

@Component({
  selector: 'resource-timeline-daily',
  templateUrl: './resource-timeline-daily.component.html',
  styleUrls: ['./styles.css']
})
export class ResourceTimelineDailyComponent implements OnInit {
  @Input() resource: Resource;
  days: Date[];
  usage = 0;
  hours: string[] = [
    '08:00',
    '09:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00'
  ];

  time: string = this.hours[0];

  constructor(private periodService: PeriodService) { }

  ngOnInit() {
    this.periodService.days
                      .subscribe( days => {
                        this.days = days;
                      });
    this.periodService.getPeriod();
  }

  getDivColor(day: number, hour: number) {
    const usage = this.resource.getUsage(this.periodService.getOffsetDate(day));
    this.usage = usage;
    this.time = this.hours[hour];
    //const value = usage > 50 ? 150 : 255;
    //const color = `rgb(${value},${value},${value})`;

    let color = '#FFF';
    if ( usage >= 50 ) {
      color = '#402E34';
    }

    return color;
  }

  getHours(day: number): string[] {
    return this.hours;
  }
}
