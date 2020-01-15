import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecieListComponent } from './specie-list/specie-list.component';
import { SpecieDetailComponent } from './specie-detail/specie-detail.component';
import { PaginatorModule } from '../shared/components/paginator/paginator.module';
import { CardListModule } from '../shared/components/cards/card-list/card-list.module';
import { SearchModule } from '../shared/components/search/search.module';

@NgModule({
  declarations: [
    SpecieListComponent,
    SpecieDetailComponent
  ],
  imports: [
    CommonModule,
    PaginatorModule,
    CardListModule,
    SearchModule
  ]
})
export class SpeciesModule { }
