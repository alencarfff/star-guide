import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MoviesComponent } from './movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { CharacterListComponent } from '../characters/character-list/character-list.component';
import { OpeningCrawlComponent } from '../opening-crawl/opening-crawl.component';

@NgModule({
  declarations: [
    OpeningCrawlComponent,
    CharacterListComponent,
    MovieListComponent,
    MoviesComponent,
    MovieDetailComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MoviesModule { }

