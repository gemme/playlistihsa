import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {

  public songs: Array<object> = null;

  constructor() { }

  ngOnInit() {

    this.songs = [{
      artist: 'Nirvana',
      name: 'Teens like spirit',
      url: 'www.google.com'
    },{
      artist: 'Metallica',
      name: 'Nothing else matters',
      url: 'www.google.com'
    }]

  }

}
