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
      
      const sortable = [];
      for (var movie in this.items) {
          sortable.push([movie, this.items[movie]]);
      }
  
      sortable.sort(function(a, b) {
          return a[1] - b[1];
      });
      
      this.items = response.results;
    });
    

  }
}
