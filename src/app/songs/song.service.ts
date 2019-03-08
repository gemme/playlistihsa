import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { map } from 'Rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  public songs: Array<object> = null;
  public song: string = null;
  private API_KEY = '7cc2122f78c55e48c3fe8b33a16b5ef8';

  constructor(private http: HttpClient) { }

  searchSongs(song) {
    const API_URL = `http://ws.audioscrobbler.com/2.0/?method=track.search&track=${song}&api_key=${this.API_KEY}&format=json`;
    return this.http.get(API_URL)
    .pipe(
      map(response => {
        console.log('response', response);
        return response.results.trackmatches.track
      })
    ).toPromise();
  }

  getSongs(){
    return [{
      artist: 'metallica',
      name: 'nothing else matters',
      url: 'url'
    },{
      artist: 'sonora dinamita',
      name: 'carmen',
      url: 'url'
    }]
  }
}
