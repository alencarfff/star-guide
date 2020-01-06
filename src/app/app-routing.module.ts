import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieResolver } from './core/resolvers/movie.resolver';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { MovieItemComponent } from './movies/movie-item/movie-item.component';
import { MoviesComponent } from './movies/movies.component';

const routes: Routes = [
  { 
    path: "", 
    component: HomeComponent,
    resolve: {
      movies: MovieResolver
    },
    children: [
      { 
        path: "movies", 
        component: MoviesComponent,
      } 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
