import { Component, OnInit, Input } from '@angular/core';
import MovieModel from '../core/models/movie.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sw-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  private movies: MovieModel[] = [];

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.movies = this.router.parent.snapshot.data['movies'].results;
  }
}
