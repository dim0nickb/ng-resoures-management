import { Component, OnInit, Input } from '@angular/core';
import { Resource } from './resource';
import { ResourceService } from './resource.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'resources',
  template: `
    <resource
      *ngFor="let resource of resources; trackBy: trackByResources"
      [resource] = resource>
    </resource>
  `,
  styleUrls: ['./styles.css']
})
export class ResourcesComponent implements OnInit {

  resources: Resource[];
  constructor(private resourceService: ResourceService) { }

  ngOnInit() {
    this.resourceService.getResources()
                        .subscribe(resources => {
                          this.resources = resources;
                        });
  }

  trackByResources(index: number, resource: Resource): number {
    return resource.id;
  }

}
