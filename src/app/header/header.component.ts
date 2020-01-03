import { Component, OnInit } from '@angular/core';
import HeaderService from '../core/services/header.service';

@Component({
  selector: 'sw-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  items: any[];

  constructor(private headerService: HeaderService) { }

  ngOnInit() {
    this.headerService.getMovies().subscribe(response => {
      this.items = response.results;
    });
  }
}
