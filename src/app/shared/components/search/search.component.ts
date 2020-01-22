import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'sw-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  private debounce = new Subject<string>();
  @Output() onSearch = new EventEmitter(); 

  constructor() { }

  ngOnInit() {
    this.debounce
      .pipe(debounceTime(300))
      .subscribe(value => {
        this.onSearch.emit(value)
      });
  }
}
