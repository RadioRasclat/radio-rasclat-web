import { Component, Input, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { AudioService } from '@app/core/services/audio.service';
import { ApiService } from '@app/core/services/api.service';
import { finalize } from 'rxjs/operators';
import moment from 'moment';
import { StreamState } from '@app/core/interfaces/stream-state';
import { Recording } from '@app/core/models/Recording';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss'],
})
export class SlideshowComponent implements OnInit {
  @Input() blogPosts = '';
  @Input() recordings = '';
  @Input() projects = '';
  @Input() shuffleRecording: Recording;
  @Input() hotRecording: Recording;
  @Input() live = '';
  @Input() nextUp = '';
  @Input() isLoading = false;

  currentShowName: any;
  currentShowImg: any;
  currentShowStart: any;
  currentShowEnd: any;

  nextShowName: any;
  nextShowStart: any;

  state: StreamState;
  streamUrl = 'https://station.radio-rasclat.com/live';

  defaultImage = './../../../assets/svg/placeholder.svg';

  public config: SwiperConfigInterface = {
    slidesPerView: 'auto',
    autoplay: {
      delay: 5000,
    },
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    observer: true,
  };

  constructor(
    private audioService: AudioService,
    private apiService: ApiService
  ) {
    this.audioService.getState().subscribe((state) => {
      this.state = state;
    });
  }

  ngOnInit() {
    if (this.live !== undefined) {
      this.apiService
        .getCurrentShow()
        .pipe(finalize(() => {}))
        .subscribe((currentShow) => {
          if (currentShow !== null) {
            this.currentShowName = currentShow.name;
            this.currentShowImg = currentShow.image_path;
            this.currentShowStart = new Date(currentShow.starts);
            this.currentShowEnd = new Date(currentShow.ends);
          }
          this.apiService
            .getNextShow()
            .pipe(finalize(() => {}))
            .subscribe((nextShow) => {
              if (nextShow.length > 0) {
                const startDate = moment(
                  nextShow[0].starts,
                  'YYYY-MM-DD HH:mm:ss'
                ).toDate();
                this.nextShowName = nextShow[0].name;
                this.nextShowStart = moment(startDate).fromNow();
              }
            });
        });
    }
  }

  openStream() {
    this.audioService.stop();
    this.playLiveStream();
  }

  play() {
    if (this.state.currentTrack.currentSrc === this.streamUrl) {
      this.audioService.play();
    } else {
      this.openStream();
    }
  }

  pause() {
    this.audioService.pause();
  }

  playLiveStream() {
    this.audioService
      .playLiveStream(
        this.streamUrl,
        this.currentShowName,
        this.currentShowImg,
        this.nextShowName,
        this.nextShowStart
      )
      .subscribe((events) => {
        // listening for fun here
      });
  }
}
