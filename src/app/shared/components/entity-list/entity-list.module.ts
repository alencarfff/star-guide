import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import UtilService from 'src/app/core/util.service';
import { EntityListComponent } from './entity-list.component';
import { CardListModule } from '../cards/card-list/card-list.module';
import { SearchModule } from '../search/search.module';
import { PaginatorModule } from '../paginator/paginator.module';

@NgModule({
  declarations: [
    EntityListComponent
  ],
  imports: [
    CommonModule,
    CardListModule,
    PaginatorModule,
    SearchModule,
  ],
  exports: [
    EntityListComponent
  ]
})
export class EntityListModule { }
