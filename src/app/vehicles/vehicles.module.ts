import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleDetailComponent } from './vehicle-detail/vehicle-detail.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { EntityListModule } from '../shared/components/entity-list/entity-list.module';

@NgModule({
  declarations: [
    VehicleDetailComponent,
    VehicleListComponent
  ],
  imports: [
    CommonModule,
    EntityListModule,
  ]
})
export class VehiclesModule { }
