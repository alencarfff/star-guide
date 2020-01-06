import { Component, OnInit, Input } from '@angular/core';
import MovieModel from 'src/app/core/models/movie.model';

@Component({
  selector: 'sw-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  @Input() movies: MovieModel[] = [];

  constructor() { }

  ngOnInit() {}


  toRoman(num) {
    var roman = { x: 10, ix: 9, v: 5, iv: 4, i: 1 };
    var str = '';
  
    for (var i of Object.keys(roman)) {
      var q = Math.floor(num / roman[i]);
      num -= q * roman[i];
      str += i.repeat(q);
    }
  
    return str;
  }
}
