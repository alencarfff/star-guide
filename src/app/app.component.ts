import { Component, OnInit } from '@angular/core';
import HeaderService from './core/services/header.service';
import { Router, ActivatedRoute } from '@angular/router';
import MovieService from './core/services/movie.service';
import MovieModel from './core/models/movie.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private movies: MovieModel[] = [];
  
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(){
    if( this.activatedRoute.snapshot.data['movies'] ){
      this.movies = this.activatedRoute.snapshot.data['movies'].results || [];    
    }

    this.router.navigate(['movies']);
  }
}