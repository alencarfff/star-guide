import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieResolver } from './core/resolvers/movie.resolver';

const routes: Routes = [
  { path: "", redirectTo: "movies", pathMatch: "full" },
  { 
    path: "movies", 
    component: HomeComponent,
    resolve: {
      movies: MovieResolver
    } 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
