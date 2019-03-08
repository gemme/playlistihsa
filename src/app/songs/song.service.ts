import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  public songs: Array<object> = null;

  constructor() { }

  getSongs() {
    return this.songs = [{
      artist: 'Nirvana2',
      name: 'Teens like spirit',
      url: 'www.google.com'
    },{
      artist: 'Metallica',
      name: 'Nothing else matters',
      url: 'www.google.com'
    }];
  }
}
