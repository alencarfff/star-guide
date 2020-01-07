import { Component, OnInit } from '@angular/core';
import { UtilService } from '../core/util.service';
import MovieService from '../core/services/movie.service';
import { Router } from '@angular/router';
import MovieModel from '../core/models/movie.model';

@Component({
  selector: 'sw-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private movies: MovieModel[];

  constructor(private router: Router, 
              private utilService: UtilService,
              private movieService: MovieService){}

  ngOnInit(){
    this.movies = this.movieService.movies;
  }

  goToHome(){
    this.router.navigate(['movies']);
  }

  toRoman(num: number) : string {
    return this.utilService.toRoman(num);
  }

  goToMovieDetail(position: number){
    this.movieService.movie = this.movies[position - 1];
        
    this.router.navigate(['movies', position]);
  }
}
