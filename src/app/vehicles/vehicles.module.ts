import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleDetailComponent } from './vehicle-detail/vehicle-detail.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { PaginatorModule } from '../shared/components/paginator/paginator.module';
import { CardListModule } from '../shared/components/cards/card-list/card-list.module';
import { SearchModule } from '../shared/components/search/search.module';

@NgModule({
  declarations: [
    VehicleDetailComponent,
    VehicleListComponent
  ],
  imports: [
    CommonModule,
    CardListModule,
    PaginatorModule,
    SearchModule
  ]
})
export class VehiclesModule { }
