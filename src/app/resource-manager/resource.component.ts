import { Component, OnInit, Input } from '@angular/core';
import { Resource } from './resource';
import { ResourceTimelineComponent } from './resource-timeline.component';
import { Subject } from 'rxjs/Subject';
import { SearcResourceService } from './search-resource.service';

@Component({
  selector: 'resource',
  template: `
    <div class="flex-container"
      *ngIf="!search || resource.name.toLowerCase().indexOf(search.toLowerCase()) > -1">
      <div class="flex-item-1 resource" (click)="select()">
        {{ this.resource.name }}
      </div>
      <div class="flex-item-4">
        <resource-timeline
          [resource] = this.resource>
        </resource-timeline>
      </div>
    </div>
    <div class="flex-container"
      *ngIf="search && resource.name.toLowerCase() === search.toLowerCase()">
      <div class="flex-item-1 header no-border" (click)="select()">
        {{ this.resource.description }}
      </div>
      <div class="flex-item-4">
        <resource-timeline-daily
          [resource] = this.resource>
        </resource-timeline-daily>
      </div>
    </div>
  `,
  styleUrls: ['./styles.css']
})
export class ResourceComponent implements OnInit {

  @Input() resource: Resource;
  search: string;
  constructor( private searchResourceService: SearcResourceService) { }

  ngOnInit() {
    this.searchResourceService.query.subscribe( (newQuery: string) => {
      this.search = newQuery;
    });
  }

  select(): void {
    this.searchResourceService.query.next(this.resource.name);
  }
}
