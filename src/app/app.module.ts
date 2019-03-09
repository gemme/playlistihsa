import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SongsComponent } from './songs/songs.component';

import { FormsModule } from '@angular/forms';

import { SongService } from './songs/song.service';
import { ArtistService } from './artists/artist.service';

import { HttpClientModule } from '@angular/common/http';

import {routing} from './app.routing';
import { ArtistsComponent } from './artists/artists.component';

@NgModule({
  declarations: [
    AppComponent,
    SongsComponent,
    ArtistsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    routing
  ],
  providers: [SongService, ArtistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
