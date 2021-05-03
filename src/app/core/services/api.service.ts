import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '@env/environment';
import { withCache } from '@ngneat/cashew';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  getArtists() {
    return this.httpClient
      .get(environment.serverUrl + '/artists', withCache())
      .pipe(
        map((body: any) => body),
        catchError((err) =>
          of({ status: err.status, message: err.error.message })
        )
      );
  }

  getArtist({ artistId }: { artistId: any }) {
    return this.httpClient
      .get(environment.serverUrl + '/artists/artist/' + artistId, withCache())
      .pipe(
        map((body: any) => body),
        catchError((err) =>
          of({ status: err.status, message: err.error.message })
        )
      );
  }

  getBlogPosts() {
    return this.httpClient
      .get(environment.serverUrl + '/blog/posts', withCache())
      .pipe(
        map((body: any) => body),
        catchError((err) =>
          of({ status: err.status, message: err.error.message })
        )
      );
  }

  getBlogPost({ blogPostId }: { blogPostId: any }) {
    return this.httpClient
      .get(environment.serverUrl + '/blog/post/' + blogPostId, withCache())
      .pipe(
        map((body: any) => body),
        catchError((err) =>
          of({ status: err.status, message: err.error.message })
        )
      );
  }

  getGenres() {
    return this.httpClient
      .get(environment.serverUrl + '/genres', withCache())
      .pipe(
        map((body: any) => body),
        catchError((err) =>
          of({ status: err.status, message: err.error.message })
        )
      );
  }

  getRecordings() {
    return this.httpClient
      .get(environment.serverUrl + '/recordings', withCache())
      .pipe(
        map((body: any) => body),
        catchError((err) =>
          of({ status: err.status, message: err.error.message })
        )
      );
  }

  getRecording({ recordingId }: { recordingId: any }) {
    return this.httpClient
      .get(
        environment.serverUrl + '/recordings/recording/' + recordingId,
        withCache()
      )
      .pipe(
        map((body: any) => body),
        catchError((err) =>
          of({ status: err.status, message: err.error.message })
        )
      );
  }

  getHotRecording() {
    return this.httpClient
      .get(environment.serverUrl + '/recordings/most-viewed', withCache())
      .pipe(
        map((body: any) => body),
        catchError((err) =>
          of({ status: err.status, message: err.error.message })
        )
      );
  }

  getHotRecordings() {
    return this.httpClient
      .get(environment.serverUrl + '/recordings/top-3-viewed', withCache())
      .pipe(
        map((body: any) => body),
        catchError((err) =>
          of({ status: err.status, message: err.error.message })
        )
      );
  }

  getProjects() {
    return this.httpClient
      .get(environment.serverUrl + '/projects', withCache())
      .pipe(
        map((body: any) => body),
        catchError((err) =>
          of({ status: err.status, message: err.error.message })
        )
      );
  }

  getProject({ projectId }: { projectId: any }) {
    return this.httpClient
      .get(
        environment.serverUrl + '/projects/project/' + projectId,
        withCache()
      )
      .pipe(
        map((body: any) => body),
        catchError((err) =>
          of({ status: err.status, message: err.error.message })
        )
      );
  }

  getShows() {
    return this.httpClient
      .get(environment.serverUrl + '/shows', withCache())
      .pipe(
        map((body: any) => body),
        catchError((err) =>
          of({ status: err.status, message: err.error.message })
        )
      );
  }

  getShowsRecentlyUpdated() {
    return this.httpClient
      .get(environment.serverUrl + '/shows/recently-updated', withCache())
      .pipe(
        map((body: any) => body),
        catchError((err) =>
          of({ status: err.status, message: err.error.message })
        )
      );
  }

  getShow({ showId }: { showId: any }) {
    return this.httpClient
      .get(environment.serverUrl + '/shows/show/' + showId)
      .pipe(
        map((body: any) => body),
        catchError((err) =>
          of({ status: err.status, message: err.error.message })
        )
      );
  }

  getCurrentShow() {
    return this.httpClient
      .get(environment.serverUrl + '/meta/shows/current')
      .pipe(
        map((body: any) => body),
        catchError((err) =>
          of({ status: err.status, message: err.error.message })
        )
      );
  }

  getNextShow() {
    return this.httpClient.get(environment.serverUrl + '/meta/shows/next').pipe(
      map((body: any) => body),
      catchError((err) =>
        of({ status: err.status, message: err.error.message })
      )
    );
  }

  getSchedule() {
    return this.httpClient.get('/meta/schedule', withCache()).pipe(
      map((body: any) => body),
      catchError((err) =>
        of({ status: err.status, message: err.error.message })
      )
    );
  }

  getLiveInfo() {
    return this.httpClient.get('/meta/live-info').pipe(
      map((body: any) => body),
      catchError((err) =>
        of({ status: err.status, message: err.error.message })
      )
    );
  }

  getLanguages() {
    return this.httpClient
      .get(environment.serverUrl + '/languages', withCache())
      .pipe(
        map((body: any) => body),
        catchError((err) =>
          of({ status: err.status, message: err.error.message })
        )
      );
  }

  getStatus() {
    return this.httpClient.get('/status').pipe(
      map((body: any) => body),
      catchError((err) =>
        of({ status: err.status, message: err.error.message })
      )
    );
  }
}
