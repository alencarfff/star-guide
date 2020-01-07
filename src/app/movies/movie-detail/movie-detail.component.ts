import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import MovieModel from 'src/app/core/models/movie.model';
import MovieService from 'src/app/core/services/movie.service';
import { UtilService } from 'src/app/core/util.service';

@Component({
  selector: 'sw-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  private movie: MovieModel;
  private movieId: number = 0;
  private textIsPlaying: boolean = false;

  constructor(private movieService: MovieService,
              private utilService: UtilService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const movie = this.movieService.movie || null;

    if( movie ) {
      this.movie = movie;
    }
    else {
      this.movie = this.getMovieFromRoute();
    }

    this.movieId = this.movie.episode_id || 0;

    this.movieService.observeMovieChange().subscribe(movie => {
      this.movie = movie;
      this.movieId = movie.episode_id;
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

  toRoman(num: number){
    return this.utilService.toRoman(num);
  }

  getMovieFromRoute(){
    const movies: MovieModel[] = this.movieService.movies || null;
    const position = +this.activatedRoute.snapshot.params['id']

    return movies[position - 1];
  }
}
