import { BrowserModule } from '@angular/platform-browser';
import {
  NgModule,
  ErrorHandler,
  Injectable,
  APP_INITIALIZER,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TranslateModule } from '@ngx-translate/core';
import { CoreModule } from '@app/core';
import { TimeagoModule } from 'ngx-timeago';
import { SharedModule } from '@app/templates/shared';
import { ToastrModule } from 'ngx-toastr';

/* VIEWS */
import { AboutModule } from '@app/templates/about/about.module';
import { ArtistsModule } from '@app/templates/artists/artists.module';
import { NotFoundModule } from '@app/templates/not-found/not-found.module';
import { HomeModule } from './templates/home/home.module';
import { BlogModule } from './templates/blog/blog.module';
import { ProjectsModule } from './templates/projects/projects.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { ImprintModule } from './templates/imprint/imprint.module';
import { PrivacyModule } from './templates/privacy/privacy.module';
import { CookiesModule } from './templates/cookies/cookies.module';
import { ChangelogModule } from './templates/changelog/changelog.module';
import { LicensesModule } from './templates/licenses/licenses.module';
import { RecordingsModule } from './templates/recordings/recordings.module';
import { ScheduleModule } from '@app/templates/schedule/schedule.module';
import { SearchModule } from '@app/templates/search/search.module';
import { ShellModule } from './templates/shell/shell.module';
import { ShowsModule } from './templates/shows/shows.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgAisModule } from 'angular-instantsearch';
import { HttpCacheInterceptorModule } from '@ngneat/cashew';

/* Services */
import { UiStyleToggleService } from '@app/core/services/ui-style-toggle.service';
import { StorageService } from '@app/core/services/local-storage.service';
import { CookieService } from 'ngx-cookie-service';

/* Analytics */
import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';

import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { environment } from '@env/environment';
import * as Sentry from '@sentry/browser';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
};

export function themeFactory(themeService: UiStyleToggleService) {
  return () => themeService.setThemeOnStart();
}

@Injectable()
export class SentryErrorHandler implements ErrorHandler {
  constructor() {
    Sentry.init({
      dsn: 'https://e0e35bbbc12a4eb8a6d6f04aa2481a1d@sentry.io/1724269',
      environment: environment.environment,
      release: environment.version,
      enabled: true,
      ignoreErrors: [
        'ERR_CONNECTION_REFUSED',
        'Es is',
        'Es ist ein Fehler aufgetreten',
        'OneSignal',
      ],
    });
  }
  handleError(error: any) {
    Sentry.captureException(error.originalError || error);
    console.error(error);
  }
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('./ngsw-worker.js', {
      enabled: environment.production,
    }),
    FormsModule,
    HttpClientModule,
    HttpCacheInterceptorModule.forRoot(),
    TranslateModule.forRoot(),
    CoreModule,
    SharedModule,
    ShellModule,
    HomeModule,
    ArtistsModule,
    NotFoundModule,
    BlogModule,
    ProjectsModule,
    ImprintModule,
    PrivacyModule,
    CookiesModule,
    ChangelogModule,
    LicensesModule,
    RecordingsModule,
    ShowsModule,
    AboutModule,
    SearchModule,
    ScheduleModule,
    Angulartics2Module.forRoot(),
    SwiperModule,
    NgAisModule.forRoot(),
    TimeagoModule.forRoot(),
    LazyLoadImageModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      progressBar: true,
      positionClass: 'toast-bottom-right',
      preventDuplicates: false,
    }),
    AppRoutingModule, // must be imported as the last module as it contains the fallback route,
  ],
  declarations: [AppComponent],
  providers: [
    UiStyleToggleService,
    StorageService,
    CookieService,
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG,
    },
    {
      provide: ErrorHandler,
      useClass: SentryErrorHandler,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: themeFactory,
      deps: [UiStyleToggleService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
