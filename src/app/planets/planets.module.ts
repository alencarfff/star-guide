import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetDetailComponent } from './planet-detail/planet-detail.component';
import { PlanetListComponent } from './planet-list/planet-list.component';
import { PaginatorModule } from '../shared/components/paginator/paginator.module';
import { CardModule } from '../shared/components/cards/card/card.module';
import { CardListModule } from '../shared/components/cards/card-list/card-list.module';

@NgModule({
  declarations: [
    PlanetDetailComponent,
    PlanetListComponent
  ],
  imports: [
    CommonModule,
    PaginatorModule,
    CardModule,
    CardListModule
  ]
})
export class PlanetsModule { }
