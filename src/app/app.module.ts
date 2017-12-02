import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ResourceManagerComponent } from './resource-manager/resource-manager.component';
import { ResourceComponent } from './resource-manager/resource.component';
import { TimelineComponent } from './resource-manager/timeline.component';
import { PeriodService } from './resource-manager/period.service';
import { ResourcesComponent } from './resource-manager/resources.component';
import { ResourceTimelineComponent } from './resource-manager/resource-timeline.component';

import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
registerLocaleData(localeRu);

import { RussifyPipe } from './resource-manager/russify.pipe';
import { ResourceTimelineDailyComponent } from './resource-manager/resource-timeline-daily.component';

@NgModule({
  declarations: [
    AppComponent,
    ResourceManagerComponent,
    ResourceComponent,
    TimelineComponent,
    ResourcesComponent,
    ResourceTimelineComponent,
    RussifyPipe,
    ResourceTimelineDailyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
