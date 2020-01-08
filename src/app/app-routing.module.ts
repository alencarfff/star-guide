import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieResolver } from './core/resolvers/movie.resolver';

import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { CharacterListComponent } from './characters/character-list/character-list.component';
import { CharacterDetailComponent } from './characters/character-detail/character-detail.component';
import { PlanetListComponent } from './planets/planet-list/planet-list.component';
import { PlanetDetailComponent } from './planets/planet-detail/planet-detail.component';
import { StarshipListComponent } from './starships/starship-list/starship-list.component';
import { StarshipDetailComponent } from './starships/starship-detail/starship-detail.component';
import { VehicleListComponent } from './vehicles/vehicle-list/vehicle-list.component';
import { VehicleDetailComponent } from './vehicles/vehicle-detail/vehicle-detail.component';
import { SpecieListComponent } from './species/specie-list/specie-list.component';
import { SpecieDetailComponent } from './species/specie-detail/specie-detail.component';

const routes: Routes = [
  { 
    path: "", 
    component: HomeComponent,
    resolve: { movies: MovieResolver },
    children: [
      { path: "movies", component: MovieListComponent },
      { path: "movies/:id", component: MovieDetailComponent }, 

      { path: "characters", component: CharacterListComponent },
      { path: "characters/:id", component: CharacterDetailComponent }, 
      
      { path: "planets", component: PlanetListComponent },
      { path: "planets/:id", component: PlanetDetailComponent }, 
      
      { path: "starships", component: StarshipListComponent },
      { path: "starships/:id", component: StarshipDetailComponent }, 

      { path: "vehicles", component: VehicleListComponent },
      { path: "vehicles/:id", component: VehicleDetailComponent }, 

      { path: "species", component: SpecieListComponent },
      { path: "species/:id", component: SpecieDetailComponent }, 
    ]
  },
  { path: "**", component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
