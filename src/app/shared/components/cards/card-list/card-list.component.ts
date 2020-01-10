import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sw-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent {
  @Input() items = [];
  @Output() onClick = new EventEmitter;

  click(position: number){
    this.onClick.emit(position);
  }
}
