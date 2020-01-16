import { Component, Input, Output, EventEmitter, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { EntityEnum } from 'src/app/core/models/entity.enum';
import { UtilService } from 'src/app/core/util.service';

@Component({
  selector: 'sw-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit, OnChanges {
  private readonly assetsPath: string = "assets/img"
  private readonly rowSize: number = 5;
  @Output() onClick = new EventEmitter;
  @Input() actualEntity: EntityEnum;
  @Input() items: any[];
  private rows: any[][];

  constructor(private utilService: UtilService){}

  ngOnInit(){
    this.update();
  }

  update(){
    this.rows = [];

    if( this.items.length < this.rowSize ){
      this.rows[0] = this.items;
    } 
    else {
      this.rows[0] = this.items.slice(0, this.rowSize);      
      this.rows[1] = this.items.slice(this.rowSize, this.items.length);
    }
  }

  ngOnChanges() {
    this.update();
  }

  getObjectId(entityCard: any ){
    return this.utilService.getEntityId(entityCard.url);
  }

  getCardImagePath(entityCard: any){
    // return `${this.assetsPath}/${this.actualEntity}/${this.getObjectId(entityCard)}.jpeg`;
    return `${this.assetsPath}/default.jpeg`;
  }

  click(cardIndex: number, isLastRow: boolean){
    if( isLastRow ) 
      cardIndex += 5;

    this.onClick.emit(cardIndex);
  }
}