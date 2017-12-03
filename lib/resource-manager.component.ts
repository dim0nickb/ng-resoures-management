import { Component, OnInit, Input } from '@angular/core';
import { ResourceComponent } from './resource.component';
import { TimelineComponent } from './timeline.component';
import { PeriodService } from './period.service';
import { UsageService } from './usage.service';
import { ResourceService } from './resource.service';
import { SearcResourceService } from './search-resource.service';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { ResourceTimelineDailyComponent } from './resource-timeline-daily.component';

@Component({
  selector: 'resource-manager',
  template: `
    <div class="unselectable center min-300 max-1000 shadow">
      <div class="flex-container">

        <div class="flex-item-1 padding-5 margin-1">
            <input type="text"
              class="inline bottom-border"
              placeholder="поиск:"
              [value]="search"
              (input)="changeSearch($event)"
              (click)="clearSearch()" />
        </div>

        <div class="flex-item-4 padding-5 margin-1">
          <timeline></timeline>
        </div>
      </div>

      <div class="padding-5 margin-1">
        <resources></resources>
      </div>
    </div>
  `,
  styleUrls: ['./styles.css'],
  providers: [
    ResourceService,
    PeriodService,
    UsageService,
    SearcResourceService
  ],
})

export class ResourceManagerComponent implements OnInit {

  search = '';
  @Input() shownDays: number;
  timelines: TimelineComponent[] = [];
  constructor(private periodService: PeriodService, private searchResourceService: SearcResourceService) { }

  ngOnInit() {
    this.periodService.init(new Date(), this.shownDays);
    this.searchResourceService.query.subscribe( (newSearch: string) => {
      this.search = newSearch;
    });
  }

  clearSearch() {
    this.search = '';
    this.searchResourceService.query.next('');
  }

  changeSearch(e) {
    const s = e.target.value;
    this.search = s;
    if (s) {
      this.searchResourceService.query.next(s);
    } else {
      this.searchResourceService.query.next('');
    }
  }
}
