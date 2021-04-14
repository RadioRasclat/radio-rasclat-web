import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';

import { CoreModule } from '@app/core';
import { SharedModule } from '../shared';
import { ShowsRoutingModule } from './shows-routing.module';
import { ShowsComponent } from './shows.component';
import { ShowsGalleryComponent } from './shows-gallery/shows-gallery.component';
import { ShowsSingleComponent } from './shows-single/shows-single.component';
import { ApiService } from '@app/core/services/api.service';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { RecordingsModule } from '../recordings/recordings.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    ShowsRoutingModule,
    SwiperModule,
    RecordingsModule,
    LazyLoadImageModule,
    NgxSkeletonLoaderModule,
  ],
  declarations: [ShowsComponent, ShowsGalleryComponent, ShowsSingleComponent],
  exports: [ShowsGalleryComponent],
  providers: [ApiService, Title],
})
export class ShowsModule {}
