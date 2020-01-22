import { Component, OnInit, Input } from '@angular/core';
import MovieModel from '../core/models/movie.model';
import UtilService  from '../core/util.service';

@Component({
  selector: 'sw-opening-crawl',
  templateUrl: './opening-crawl.component.html',
  styleUrls: ['./opening-crawl.component.scss']
})
export class OpeningCrawlComponent implements OnInit {
  @Input() movie: MovieModel;
  private showAudio: boolean = false;

  constructor(private utilService: UtilService){}

  ngOnInit() {
    let self = this;
    setTimeout(() => {
      self.showAudio = true
    }, 3500);
  }

  toRoman(num: number): string {
    return this.utilService.toRoman(num);
  }
}
