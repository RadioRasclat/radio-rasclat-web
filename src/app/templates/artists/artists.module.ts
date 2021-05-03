import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { ArtistsRoutingModule } from './artists-routing.module';
import { ArtistsComponent } from './artists.component';
import { ArtistsSingleComponent } from './artists-single/artists-single.component';
import { SharedModule } from '../shared';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { RecordingsModule } from '@app/templates/recordings/recordings.module';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    ArtistsRoutingModule,
    SharedModule,
    LazyLoadImageModule,
    RecordingsModule,
    NgxSkeletonLoaderModule,
  ],
  declarations: [ArtistsComponent, ArtistsSingleComponent],
})
export class ArtistsModule {}
