import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie-list/movie-list.component';
import { OpeningCrawlComponent } from '../opening-crawl/opening-crawl.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

@NgModule({
  declarations: [
    MovieListComponent,
    MovieDetailComponent,
    OpeningCrawlComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    OpeningCrawlComponent
  ]
})
export class MoviesModule { }

