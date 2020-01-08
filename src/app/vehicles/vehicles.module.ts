import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleDetailComponent } from './vehicle-detail/vehicle-detail.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';

@NgModule({
  declarations: [
    VehicleDetailComponent,
    VehicleListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class VehiclesModule { }
