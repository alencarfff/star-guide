import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { PageableModel } from 'src/app/core/models/pageable.model';

@Component({
  selector: 'sw-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent {
  @Input() pageable: PageableModel;
  @Output() onChange = new EventEmitter();

  constructor() { 
    this.pageable = { page: 1, next: null, previous: null }
  }

  nextPage(){
    if( this.pageable.next ){
      this.pageable.page++;
      this.onChange.emit('next');
    }
  }
  previousPage(){
    if( this.pageable.previous && this.pageable.page > 1 ){
      this.pageable.page--;
      this.onChange.emit('previous');
    }
  }
}
