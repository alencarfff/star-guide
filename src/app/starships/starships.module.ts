import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarshipDetailComponent } from './starship-detail/starship-detail.component';
import { StarshipListComponent } from './starship-list/starship-list.component';
import { CardListModule } from '../shared/components/cards/card-list/card-list.module';
import { PaginatorModule } from '../shared/components/paginator/paginator.module';

@NgModule({
  declarations: [
    StarshipDetailComponent,
    StarshipListComponent
  ],
  imports: [
    CommonModule,
    CardListModule,
    PaginatorModule
  ]
})
export class StarshipsModule { }
