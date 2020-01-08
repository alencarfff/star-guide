import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetDetailComponent } from './planet-detail/planet-detail.component';
import { PlanetListComponent } from './planet-list/planet-list.component';

@NgModule({
  declarations: [
    PlanetDetailComponent,
    PlanetListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PlanetsModule { }
