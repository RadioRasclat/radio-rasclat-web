import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { ApiService } from '@app/core/services/api.service';
import _ from 'lodash';
import moment from 'moment';
import { Recording } from '@app/core/models/Recording';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recordings',
  templateUrl: './recordings.component.html',
  styleUrls: ['./recordings.component.scss'],
})
export class RecordingsComponent implements OnInit {
  recordings: Recording[];
  recordingsSorted: any;
  isLoading = false;
  months = [
    marker('January'),
    marker('February'),
    marker('March'),
    marker('April'),
    marker('May'),
    marker('June'),
    marker('July'),
    marker('August'),
    marker('September'),
    marker('October'),
    marker('November'),
    marker('December'),
  ];
  years = {
    min: 0,
    max: 0,
  };
  pager: any;

  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(x => this.getRecordings(x.page || 1));
  }

  getRecordingsByDate(year: number, month: number): Recording[] {
    let filtered: Recording[];
    filtered = _.filter(this.recordings, function (obj: Recording) {
      return (
        moment(obj.timeStart, 'YYYY-MM-DD').month() === month &&
        moment(obj.timeStart, 'YYYY-MM-DD').year() === year
      );
    });
    return filtered;
  }

  createRange(min: number, max: number) {
    const items: number[] = [];
    for (let i = max; i >= min; i--) {
      items.push(i);
    }
    return items;
  }

  private getRecordings(page: number) {
    this.isLoading = true;
    this.apiService
      .getRecordings(page)
      .pipe(finalize(() => {}))
      .subscribe((recordings) => {
        this.pager = recordings.pager;
        this.recordings = recordings.pageOfItems;
        const newestRecording = _.maxBy(
          this.recordings,
          function (recording: Recording) {
            return recording.timeStart;
          }
        );

        const oldestRecording = _.minBy(
          this.recordings,
          function (recording: Recording) {
            return recording.timeStart;
          }
        );
        this.years.max = moment(newestRecording.timeStart, 'YYYY-MM-DD').year();
        this.years.min = moment(oldestRecording.timeStart, 'YYYY-MM-DD').year();
        // turn off loading state
        this.isLoading = false;
      });
  }
}
