import { Component, OnInit } from '@angular/core';
import { RouterStateSnapshot, Router, ActivatedRoute } from '@angular/router';
import MovieModel from '../core/models/movie.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movies: MovieModel[] = [];
  
  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.movies = this.router.snapshot.data['movies'].results;
  }

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
