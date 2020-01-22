import { Component, OnInit, Input } from '@angular/core';
import MovieModel from 'src/app/core/models/movie.model';
import UtilService  from 'src/app/core/util.service';
import { Router, ActivatedRoute } from '@angular/router';
import MovieService from 'src/app/core/services/movie.service';
import WarningService from 'src/app/core/services/warning.service';

@Component({
  selector: 'sw-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  private movies: MovieModel[] = [];
  private toAnimate: boolean = true;

  constructor(private movieService: MovieService,
              private utilService: UtilService,
              private warningService: WarningService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }
              
  ngOnInit() {
    const page = this.activatedRoute.snapshot.parent.data['movies'];

    this.movies = page.results;
    this.movieService.savePage(page, 1);

    let self = this;
    setTimeout(() => {
      self.toAnimate = false 
    }, this.warningService.timeInMs);  
  }

  toRoman(num: number) : string {
    return this.utilService.toRoman(num);
  }

  goToMovieDetail(position: number){
    this.movieService.setPreloadedItem = this.movies[position - 1];
    
    this.router.navigate(['movies', position]);
  }
}
