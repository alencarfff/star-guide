import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieResolver } from './core/resolvers/movie.resolver';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
  { 
    path: "", 
    component: HomeComponent,
    resolve: { movies: MovieResolver },
    children: [
      { 
        path: "movies", 
        children: [
          { path: "", component: MovieListComponent },
          { path: ":id", component: MovieDetailComponent }

        ]
      }
    ]
  },
  { path: "**", component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
