import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarshipDetailComponent } from './starship-detail/starship-detail.component';
import { StarshipListComponent } from './starship-list/starship-list.component';

@NgModule({
  declarations: [
    StarshipDetailComponent,
    StarshipListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StarshipsModule { }
