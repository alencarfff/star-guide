import { Component, OnInit } from '@angular/core';
import { UtilService } from '../core/util.service';
import MovieService from '../core/services/movie.service';
import { Router } from '@angular/router';
import MovieModel from '../core/models/movie.model';

@Component({
  selector: 'sw-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, 
              private utilService: UtilService){}

  ngOnInit(){}

  goTo(url: string){
    this.router.navigate([url]);
  }

  toRoman(num: number) : string {
    return this.utilService.toRoman(num);
  }
}
