import { Component, OnInit } from '@angular/core';
import { RouterStateSnapshot, Router, ActivatedRoute } from '@angular/router';
import MovieModel from '../core/models/movie.model';
import MovieService from '../core/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private router: ActivatedRoute,
              private movieService: MovieService) { }

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
