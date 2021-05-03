import { Component, Input, OnInit } from '@angular/core';
import { Project } from '@app/core/models/Project';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-projects-slider',
  templateUrl: './projects-slider.component.html',
  styleUrls: ['./projects-slider.component.scss'],
})
export class ProjectsSliderComponent implements OnInit {
  @Input() projects: Project[];
  @Input() limit: number;
  @Input() isLoading = false;

  defaultImage = './../../../assets/svg/placeholder.svg';

  public config: SwiperConfigInterface = {
    breakpoints: {
      0: {
        slidesPerView: 1.2,
        spaceBetween: 30,
      },
      600: {
        slidesPerView: 2.3,
        spaceBetween: 30,
      },
      990: {
        slidesPerView: 2.8,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 3.5,
        spaceBetween: 30,
      },
    },
    spaceBetween: 30,
    observer: true,
    freeMode: true,
  };

  constructor() {}

  ngOnInit(): void {}
}
