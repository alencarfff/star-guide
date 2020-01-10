import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecieListComponent } from './specie-list/specie-list.component';
import { SpecieDetailComponent } from './specie-detail/specie-detail.component';
import { PaginatorModule } from '../shared/components/paginator/paginator.module';
import { CardListModule } from '../shared/components/cards/card-list/card-list.module';

@NgModule({
  declarations: [
    SpecieListComponent,
    SpecieDetailComponent
  ],
  imports: [
    CommonModule,
    PaginatorModule,
    CardListModule
  ]
})
export class SpeciesModule { }
