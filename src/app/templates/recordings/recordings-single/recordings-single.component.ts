import { Component, OnInit, AfterViewInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { ApiService } from '@app/core/services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import Vibrant from 'node-vibrant';
import { AudioService } from '@app/core/services/audio.service';
import { StreamState } from '@app/core/interfaces/stream-state';
import { Palette } from 'node-vibrant/lib/color';
import mediumZoom from 'medium-zoom';
import { ToastrService } from 'ngx-toastr';
import { Recording } from '@app/core/models/Recording';

@Component({
  selector: 'app-recordings-single',
  templateUrl: './recordings-single.component.html',
  styleUrls: ['./recordings-single.component.scss'],
})
export class RecordingsSingleComponent implements OnInit, AfterViewInit {
  recording: Recording;
  showRecordings: Recording[];
  title: any;
  hex: any;
  rgba: any;
  isLoading = false;
  id: any;
  message: string;
  state: StreamState;

  defaultImage = './../../../assets/svg/placeholder.svg';
  private sub: any;

  constructor(
    private audioService: AudioService,
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router,
    private titleService: Title,
    private toastService: ToastrService
  ) {
    // listen to stream state
    this.audioService.getState().subscribe((state) => {
      this.state = state;
    });
  }

  public setTitle({ title }: { title: any }) {
    this.titleService.setTitle('Radio Rasclat — ' + title);
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe((params) => {
      this.isLoading = true;
      this.id = params.id;
      if (this.id) {
        this.apiService
          .getRecording({ recordingId: this.id })
          .pipe(
            finalize(() => {
              this.isLoading = false;
            })
          )
          .subscribe((recording) => {
            if (recording && recording.status !== 404) {
              this.recording = recording;
              this.setTitle({ title: this.recording.title });
              Vibrant.from(
                'https://cors-proxy.radio-rasclat.com/' + this.recording.image
              )
                .getPalette()
                .then((palette) => {
                  this.hex = palette.Vibrant.hex;
                  this.rgba =
                    'rgba(' +
                    palette.Vibrant.r +
                    ',' +
                    palette.Vibrant.g +
                    ',' +
                    palette.Vibrant.b +
                    ',0.15)';
                });
              this.apiService
                .getShow({ showId: this.recording?.show._id })
                .pipe(
                  finalize(() => {
                    this.isLoading = false;
                  })
                )
                .subscribe((show) => {
                  if (typeof show.recordings[0]['title'] !== 'undefined') {
                    this.showRecordings = show.recordings;
                  } else {
                    this.showRecordings = [];
                  }
                });
            } else {
              this.toastService.info(recording.message, recording.status, {
                closeButton: true,
              });
            }
          });
      }
    });
  }

  ngAfterViewInit() {
    mediumZoom('[data-zoomable]', {
      margin: 80,
      background: '',
    });
  }

  openFile() {
    this.audioService.stop();
    this.playStream(this.recording.audio);
  }

  play() {
    if (this.state.currentTrack.currentSrc === this.recording.audio) {
      this.audioService.play();
    } else {
      this.openFile();
    }
  }

  pause() {
    this.audioService.pause();
  }

  playStream(url: string) {
    this.audioService
      .playStream(url, this.id, this.recording.title, this.recording.image)
      .subscribe((events) => {
        // listening for fun here
      });
  }
}
