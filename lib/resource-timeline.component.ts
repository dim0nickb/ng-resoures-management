import { Component, OnInit, Input } from '@angular/core';
import { PeriodService } from './period.service';
import { Resource } from './resource';

@Component({
  selector: 'resource-timeline',
  template: `
    <div class="flex-container">
      <div class="padding-5 margin-1 flex-item-1 center-text"></div>
      <div class="flex-item-3 timeline center-text"
        *ngFor="let day of this.days; let i = index;"
        [style.backgroundColor]="this.getDivColor(i)">
        {{ this.usage }}%
      </div>
      <div class="padding-5 margin-1 flex-item-1 center-text"></div>
    </div>
  `,
  styleUrls: ['./styles.css']
})
export class ResourceTimelineComponent implements OnInit {

  @Input() resource: Resource;
  days: Date[];
  usage = 0;

  constructor(private periodService: PeriodService) { }

  ngOnInit() {
    this.periodService.days
                      .subscribe( days => {
                        this.days = days;
                      });
    this.periodService.getPeriod();
  }

  getDivColor(idx) {
    const day = this.periodService.getOffsetDate(idx);
    const usage = this.resource.getUsage(day);
    this.usage = usage;
    const value = 255 - Math.floor((255 / 100 * usage - 1) / 2);
    //const color = `rgb(${value},${value},${value})`;
    //console.log(`index: ${idx}, usage: ${usage}, color: ${color}`);
    /*
    красный - занят FF7676
    серый - выходной 9EB1A7
    оранжевый - больше 50% занятости FFC173
    желтый - частично занят FFFC8D
    зеленый - свободный 9BFF97
    /**/
    let color = `rgb(${value},${value},${value})`;
    if (usage >= 75) {color = '#FF7676';}
    else if (usage >= 50) {color = '#FFC173';}
    else if (usage >= 25) {color = '#FFFC8D';}
    else {color = '#9BFF97';}
    if (day.getDay()==0 || day.getDay()==6){
      color = `#9EB1A7`;
    }

    return color;
  }
}
