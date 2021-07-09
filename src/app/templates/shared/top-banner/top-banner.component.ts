import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-top-banner',
  templateUrl: './top-banner.component.html',
  styleUrls: ['./top-banner.component.scss'],
})
export class TopBannerComponent {
  bannerVisible: Boolean;

  constructor(private cookieService: CookieService) {
    if (this.cookieService.check('banner')) {
      if (this.cookieService.get('banner') === 'hidden') {
        this.bannerVisible = false;
      } else {
        if (this.cookieService.get('banner') === 'visible') {
          this.bannerVisible = true;
        }
      }
    } else {
      this.cookieService.set('banner', 'visible');
      this.bannerVisible = true;
    }
  }

  hideBanner() {
    this.cookieService.set('banner', 'hidden', 7);
    this.bannerVisible = false;
  }
}
