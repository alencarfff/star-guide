import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import MovieModel from 'src/app/core/models/movie.model';
import MovieService from 'src/app/core/services/movie.service';

@Component({
  selector: 'sw-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  private movie: MovieModel;
  private textIsPlaying: boolean = true;

  constructor(private movieService: MovieService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const movie = this.movieService.movie || null;

    if( movie ) {
      this.movie = movie; 
    }
    else {
      this.movie = this.getMovieFromRoute();
    }

    this.movieService.observeMovieChange().subscribe(movie => {
      this.movie = movie;
    });

    this.activateStopTextTimer();
  }

  skipOrShowText(){
    if( this.textIsPlaying ) {
      this.textIsPlaying = false;
    }
    else {
      this.textIsPlaying = true;
      this.activateStopTextTimer()
    }
  }

  activateStopTextTimer(){
    let self = this;
    setTimeout(() => {
      self.textIsPlaying = false
    }, 88 * 1000);
  }

  getMovieFromRoute(){
    const movies: MovieModel[] = this.movieService.movies || null;
    const position = +this.activatedRoute.snapshot.params['id']

    return movies[position - 1];
  }
}
