import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecieListComponent } from './specie-list/specie-list.component';
import { SpecieDetailComponent } from './specie-detail/specie-detail.component';

@NgModule({
  declarations: [
    SpecieListComponent,
    SpecieDetailComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SpeciesModule { }
