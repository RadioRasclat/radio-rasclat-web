import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalService } from '@app/core/services/modal.service';
import { I18nService } from '@app/core';
import { ApiService } from '@app/core/services/api.service';
import { NgxTippyProps } from 'ngx-tippy-wrapper';
declare var klaro: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isNavVisible = false;
  isLanguagePickerVisible = false;
  now: number;
  isLoading = false;

  tippyProps: NgxTippyProps = {
    trigger: 'click',
    allowHTML: true,
    theme: 'light',
    animation: 'scale-subtle',
    interactive: true,
    placement: 'bottom'
  };

  constructor(
    private router: Router,
    private i18nService: I18nService,
    private apiService: ApiService,
    private modalService: ModalService
  ) {
    setInterval(() => {
      this.now = Date.now();
    }, 10);
  }

  toggleNav() {
    this.isNavVisible = !this.isNavVisible;
  }

  closeNav() {
    this.isNavVisible = false;
  }

  toggleLanguagePicker() {
    this.isLanguagePickerVisible = !this.isLanguagePickerVisible;
  }

  ngOnInit() {}

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  openCookieManager() {
    klaro.show();
  }
}
