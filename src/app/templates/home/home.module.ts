import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';

import { CoreModule } from '@app/core';
import { SharedModule } from '../shared';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ApiService } from '@app/core/services/api.service';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { RecordingsModule } from '../recordings/recordings.module';
import { ShowsModule } from '../shows/shows.module';
import { ScheduleModule } from '../schedule/schedule.module';
import { ModalModule } from '@app/templates/shared/modal';
import { ProjectsModule } from '@app/templates/projects/projects.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    HomeRoutingModule,
    SwiperModule,
    RecordingsModule,
    ShowsModule,
    ScheduleModule,
    ModalModule,
    ProjectsModule,
  ],
  declarations: [HomeComponent],
  providers: [ApiService, Title],
})
export class HomeModule {}
