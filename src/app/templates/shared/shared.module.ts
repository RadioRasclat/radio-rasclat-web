import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { ApiService } from '@app/core/services/api.service';
import { LimitPipe } from '@app/core/pipes/LimitPipe';
import { ReadingTimePipe } from '@app/core/pipes/ReadingTimePipe';
import { SafeHtmlPipe } from '@app/core/pipes/SafeHtmlPipe';
import { MomentPipe } from '@app/core/pipes/MomentPipe';
import { TimeagoModule } from 'ngx-timeago';
import { PlayerComponent } from './player/player.component';
import { RouterModule } from '@angular/router';
import { LiveComponent } from './live/live.component';
import { TextSeparatorComponent } from './text-separator/text-separator.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { DarkModeToggleComponent } from './dark-mode-toggle/dark-mode-toggle.component';
import { SvgIconsModule } from '@ngneat/svg-icon';
import icons from '../../../assets/svg/svg-icons';
import { PageBannerComponent } from './page-banner/page-banner.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { TranslateModule } from '@ngx-translate/core';
import { SocialIconsComponent } from './social-icons/social-icons.component';
import { AnnouncementBannerComponent } from './announcement-banner/announcement-banner.component';
import { LanguageSelectComponent } from './language-select/language-select.component';
import { ScriptHackComponent } from './script-hack/script-hack.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { FooterComponent } from './footer/footer.component';
import { ModalModule } from '@app/templates/shared/modal';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SvgIconsModule.forRoot({
      icons,
    }),
    LazyLoadImageModule,
    TranslateModule,
    NgxSkeletonLoaderModule,
    ModalModule,
  ],
  declarations: [
    LoaderComponent,
    SafeHtmlPipe,
    LimitPipe,
    ReadingTimePipe,
    MomentPipe,
    PlayerComponent,
    LiveComponent,
    TextSeparatorComponent,
    PageTitleComponent,
    DarkModeToggleComponent,
    PageBannerComponent,
    SocialIconsComponent,
    AnnouncementBannerComponent,
    LanguageSelectComponent,
    ScriptHackComponent,
    FooterComponent,
    ScrollTopComponent,
  ],
  exports: [
    LoaderComponent,
    SafeHtmlPipe,
    LimitPipe,
    ReadingTimePipe,
    MomentPipe,
    TimeagoModule,
    PlayerComponent,
    LiveComponent,
    TextSeparatorComponent,
    PageTitleComponent,
    DarkModeToggleComponent,
    PageBannerComponent,
    SocialIconsComponent,
    AnnouncementBannerComponent,
    LanguageSelectComponent,
    ScriptHackComponent,
    FooterComponent,
    ScrollTopComponent,
  ],
  providers: [ApiService],
})
export class SharedModule {}
