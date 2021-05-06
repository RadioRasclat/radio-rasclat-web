import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as moment from 'moment';
import { StreamState } from '../interfaces/stream-state';

@Injectable({
  providedIn: 'root',
})
export class AudioService {
  audioEvents = [
    'ended',
    'error',
    'play',
    'playing',
    'pause',
    'timeupdate',
    'canplay',
    'loadedmetadata',
    'loadstart',
    'hide',
    'live',
  ];
  private stop$ = new Subject();
  private audioObj = new Audio();
  private state: StreamState = {
    playing: false,
    readableCurrentTime: '',
    readableDuration: '',
    duration: undefined,
    currentTrack: {
      currentTime: undefined,
      currentSrc: '',
      currentImage: '',
      currentTitle: '',
      currentUrl: '',
    },
    volume: 100,
    canplay: false,
    muted: false,
    hidden: true,
    live: false,
    nextShowName: undefined,
    nextShowStart: undefined,
    error: false,
  };

  private stateChange: BehaviorSubject<StreamState> = new BehaviorSubject(
    this.state
  );

  playStream(url: string, detailUrl: string, title: string, image: string) {
    if (this.state.hidden) {
      this.state.hidden = false;
    }
    this.state.currentTrack.currentTitle = title;
    this.state.currentTrack.currentImage = image;
    this.state.currentTrack.currentUrl = detailUrl;
    return this.streamObservable(url).pipe(takeUntil(this.stop$));
  }

  playLiveStream(
    url: string,
    title: string,
    image: string,
    nextShowName: any,
    nextShowStart: any
  ) {
    this.state.live = true;
    if (this.state.hidden) {
      this.state.hidden = false;
    }
    this.state.currentTrack.currentTitle = title;
    this.state.currentTrack.currentImage = image;
    this.state.nextShowName = nextShowName;
    this.state.nextShowStart = nextShowStart;
    return this.streamObservable(url).pipe(takeUntil(this.stop$));
  }

  play() {
    if (this.state.hidden) {
      this.state.hidden = false;
    }
    this.audioObj.play();
  }

  pause() {
    this.audioObj.pause();
  }

  stop() {
    this.stop$.next();
    if (this.state.live) {
      this.state.live = false;
    }
  }

  hide() {
    if (this.state.playing) {
      this.pause();
    }
    this.resetState();
  }
  
  mute() {
    this.audioObj.muted = true;
  }
  
  unmute() {
    this.audioObj.muted = false;
  }

  seekTo(seconds: number) {
    this.audioObj.currentTime = seconds;
  }

  setVolumeTo(precent: number) {
    this.audioObj.volume = precent / 100;
  }

  formatTime(time: number, format: string = 'HH:mm:ss') {
    const momentTime = time * 1000;
    return moment.utc(momentTime).format(format);
  }

  getState(): Observable<StreamState> {
    return this.stateChange.asObservable();
  }

  getCurentAudioSrc() {
    return this.audioObj.currentSrc;
  }

  private streamObservable(url: string) {
    return new Observable((observer) => {
      // Play audio
      this.audioObj.src = url;
      this.audioObj.muted = false;
      this.audioObj.load();
      this.audioObj.play();

      const handler = (event: Event) => {
        this.updateStateEvents(event);
        observer.next(event);
      };

      this.addEvents(this.audioObj, this.audioEvents, handler);
      return () => {
        // Stop Playing
        this.audioObj.pause();
        this.audioObj.currentTime = 0;
        // remove event listeners
        this.removeEvents(this.audioObj, this.audioEvents, handler);
        // reset state
        this.resetState();
      };
    });
  }

  private addEvents(
    obj: HTMLAudioElement,
    events: Array<string>,
    handler: any
  ) {
    events.forEach((event) => {
      obj.addEventListener(event, handler);
    });
  }

  private removeEvents(
    obj: HTMLAudioElement,
    events: Array<string>,
    handler: any
  ) {
    events.forEach((event) => {
      obj.removeEventListener(event, handler);
    });
  }

  private updateStateEvents(event: Event): void {
    switch (event.type) {
      case 'canplay':
        this.state.duration = this.audioObj.duration;
        this.state.readableDuration = this.formatTime(this.state.duration);
        this.state.currentTrack.currentSrc = this.audioObj.currentSrc;
        // this.state.currentTitle = this.title;
        this.state.canplay = true;
        break;
      case 'playing':
        this.state.playing = true;
        break;
      case 'pause':
        this.state.playing = false;
        break;
      case 'timeupdate':
        this.state.currentTrack.currentTime = this.audioObj.currentTime;
        this.state.readableCurrentTime = this.formatTime(
          this.state.currentTrack.currentTime
        );
        break;
      case 'hide':
        this.state.hidden = true;
        this.state.playing = false;
        break;
      case 'live':
        this.state.live = true;
        break;
      case 'error':
        this.resetState();
        this.state.error = true;
        break;
    }
    this.stateChange.next(this.state);
  }

  private resetState() {
    this.state = {
      playing: false,
      readableCurrentTime: '',
      readableDuration: '',
      duration: undefined,
      currentTrack: {
        currentTime: undefined,
        currentSrc: '',
        currentImage: '',
        currentTitle: '',
        currentUrl: '',
      },
      volume: this.state.volume,
      canplay: false,
      muted: false,
      hidden: true,
      live: this.state.live,
      nextShowName: this.state.nextShowName,
      nextShowStart: this.state.nextShowStart,
      error: false,
    };
  }
}
