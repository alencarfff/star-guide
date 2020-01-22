import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleDetailComponent } from './vehicle-detail/vehicle-detail.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { EntityListModule } from '../shared/components/entity-list/entity-list.module';
import { EntityDetailModule } from '../shared/components/entity-detail/entity-detail.module';
import { SearchModule } from '../shared/components/search/search.module';
import { PaginatorModule } from '../shared/components/paginator/paginator.module';
import { CardListModule } from '../shared/components/cards/card-list/card-list.module';

@NgModule({
  declarations: [
    VehicleDetailComponent,
    VehicleListComponent,
  ],
  imports: [
    CommonModule,
    // EntityListModule,
    SearchModule,
    PaginatorModule,
    EntityDetailModule,
    CardListModule
  ]
})
export class VehiclesModule { }
