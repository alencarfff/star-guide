import { Component, Input } from '@angular/core';
import MovieModel from '../core/models/movie.model';
import { UtilService } from '../core/util.service';

@Component({
  selector: 'sw-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() movies: MovieModel[];

  constructor(private utilService: UtilService){}

  toRoman(num: number) : string {
    return this.utilService.toRoman(num);
  }
}
