import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import MovieModel from '../core/models/movie.model';

@Component({
  selector: 'sw-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  movies: MovieModel[];
  
  constructor(private router: ActivatedRoute) { }

  ngOnInit(){
    this.movies = this.router.snapshot.data['movies'].results;
  }
}
