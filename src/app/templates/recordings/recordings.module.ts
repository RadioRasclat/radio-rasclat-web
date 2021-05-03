import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';

import { CoreModule } from '@app/core';
import { SharedModule } from '../shared';
import { RecordingsRoutingModule } from './recordings-routing.module';
import { RecordingsComponent } from './recordings.component';
import { RecordingsGalleryComponent } from './recordings-gallery/recordings-gallery.component';
import { RecordingsSingleComponent } from './recordings-single/recordings-single.component';
import { ApiService } from '@app/core/services/api.service';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { Angulartics2Module } from 'angulartics2';
import { TooltipModule } from 'ng2-tooltip-directive';
import { SlideshowComponent } from '../home/slideshow/slideshow.component';
import { SvgIconsModule } from '@ngneat/svg-icon';
import icons from '../../../assets/svg/svg-icons';
import { RecordingsListComponent } from './recordings-list/recordings-list.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    RecordingsRoutingModule,
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
    RecordingsComponent,
    RecordingsGalleryComponent,
    RecordingsSingleComponent,
    SlideshowComponent,
    RecordingsListComponent,
  ],
  exports: [
    RecordingsGalleryComponent,
    SlideshowComponent,
    RecordingsListComponent,
  ],
  providers: [ApiService, Title],
})
export class RecordingsModule {}
