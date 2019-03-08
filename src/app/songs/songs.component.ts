import { Component, OnInit } from '@angular/core';
import { SongService } from './song.service';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {

  public song: string = null;
  public songs: Array<object> = null;

  constructor(private songService: SongService) { }

  ngOnInit() {
    this.songs = this.songService.getSongs();
  }

  getSongs() {
    this.songService.searchSongs(this.song)
    .then(res => {
      console.log('service', res);
      this.songs = res;
    })
    .catch(
      err => console.error('error', err)
    )
  }

}
