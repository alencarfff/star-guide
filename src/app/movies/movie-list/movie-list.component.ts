import { Component, OnInit, Input } from '@angular/core';
import MovieModel from 'src/app/core/models/movie.model';
import { UtilService } from 'src/app/core/util.service';
import { Router } from '@angular/router';
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
              private router: Router) { }
              
  ngOnInit() {
     this.movies = this.movieService.movies; 
  
    let self = this;
    setTimeout(() => {
      self.toAnimate = false 
    }, this.warningService.timeInMs);  

    // const results = [];
    // for(let i = 0; i <= 15; i++){
    //   this.movieService.find(`starships?page=${i}`).subscribe(a => {
    //     var b: any = a;
        
    //     if( b.next ){
    //       results.push(b.results);
    //     }
    //     else {
    //       results.forEach(result => {
    //         var temp = result.map(chara => chara.name)
    //         temp.forEach(name => {
    //             console.log(name)
    //         });
    //       });
    //     }
    //   });
    // }
  }

  toRoman(num: number) : string {
    return this.utilService.toRoman(num);
  }

  goToMovieDetail(position: number){
    this.movieService.movie = this.movies[position - 1];
    
    this.router.navigate(['movies', position]);
  }
}
