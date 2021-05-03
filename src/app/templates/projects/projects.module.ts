import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';

import { CoreModule } from '@app/core';
import { SharedModule } from '../shared';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { ProjectsSingleComponent } from './projects-single/projects-single.component';
import { ApiService } from '@app/core/services/api.service';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { Angulartics2Module } from 'angulartics2';
import { TooltipModule } from 'ng2-tooltip-directive';
import { SvgIconsModule } from '@ngneat/svg-icon';
import icons from '../../../assets/svg/svg-icons';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectsSliderComponent } from './projects-slider/projects-slider.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    ProjectsRoutingModule,
    SwiperModule,
    LazyLoadImageModule,
    Angulartics2Module,
    TooltipModule,
    SvgIconsModule.forRoot({
      icons,
    }),
    NgxSkeletonLoaderModule,
  ],
  declarations: [
    ProjectsComponent,
    ProjectsSingleComponent,
    ProjectsListComponent,
    ProjectsSliderComponent,
  ],
  exports: [ProjectsListComponent, ProjectsSliderComponent],
  providers: [ApiService, Title],
})
export class ProjectsModule {}
