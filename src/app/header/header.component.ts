import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import MovieModel from '../core/models/movie.model';

@Component({
  selector: 'sw-header',
  templateUrl: '\./header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() movies: MovieModel[];
}
