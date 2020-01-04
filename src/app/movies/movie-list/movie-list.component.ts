import { Component, OnInit, Input } from '@angular/core';
import MovieModel from 'src/app/core/models/movie.model';
import { UtilService } from 'src/app/core/util.service';

@Component({
  selector: 'sw-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  @Input() movies: MovieModel[] = [];

  constructor(private utilService: UtilService) { }

  ngOnInit() {}

  toRoman(num: number) : string {
    return this.utilService.toRoman(num);
  }
}
