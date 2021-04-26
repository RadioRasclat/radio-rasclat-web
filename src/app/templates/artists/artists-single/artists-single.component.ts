import { Component, OnInit, AfterViewInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { ApiService } from '@app/core/services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import Vibrant from 'node-vibrant';
import { Palette } from 'node-vibrant/lib/color';
import mediumZoom from 'medium-zoom';

@Component({
  selector: 'app-artists-single',
  templateUrl: './artists-single.component.html',
  styleUrls: ['./artists-single.component.scss'],
})
export class ArtistsSingleComponent implements OnInit, AfterViewInit {
  artist: any;
  recordings: any;
  title: any;
  hex: any;
  isLoading = false;
  id: any;
  message: string;

  defaultImage = './../../../assets/svg/placeholder.svg';
  private sub: any;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router,
    private titleService: Title
  ) {}

  public setTitle({ title }: { title: any }) {
    this.titleService.setTitle('Radio Rasclat — ' + title);
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe((params) => {
      this.isLoading = true;
      this.id = params.id;
      this.apiService
        .getArtist({ artistId: this.id })
        .pipe(
          finalize(() => {
            this.isLoading = false;
          })
        )
        .subscribe((artist) => {
          this.artist = artist;
          if (typeof artist.recordings[0]['title'] !== 'undefined') {
            this.recordings = artist.recordings;
          } else {
            this.recordings = [];
          }
          this.setTitle({ title: this.artist.title });
          Vibrant.from(
            'https://cors-proxy.radio-rasclat.com/' + this.artist.image
          )
            .getPalette()
            .then((palette) => {
              this.hex = palette.Vibrant.hex;
            });
        });
    });
  }

  ngAfterViewInit() {
    mediumZoom('[data-zoomable]', {
      margin: 80,
      background: '',
    });
  }
}
