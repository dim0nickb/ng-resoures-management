import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ResourceManagerComponent} from './resource-manager.component';
import {ResourceComponent} from './resource.component';
import {TimelineComponent} from './timeline.component';
import {ResourcesComponent} from './resources.component';
import {ResourceTimelineComponent} from './resource-timeline.component';
import {RussifyPipe} from './russify.pipe';
import {ResourceTimelineDailyComponent} from './resource-timeline-daily.component';

@NgModule({
    declarations: [
        ResourceManagerComponent,
        ResourceComponent,
        TimelineComponent,
        ResourcesComponent,
        ResourceTimelineComponent,
        RussifyPipe,
        ResourceTimelineDailyComponent
    ],
    imports: [
        CommonModule, // Критические провайдеры, NgIf и NgFor
        FormsModule
    ],
    exports: [ResourceManagerComponent]
})
export class NgResouresManagementModule { }