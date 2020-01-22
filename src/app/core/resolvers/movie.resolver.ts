import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import MovieModel from '../models/movie.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import MovieService from '../services/movie.service';
import Page from '../models/page.model';

@Injectable({ providedIn: 'root' })
export class MovieResolver implements Resolve<MovieModel> {
    constructor(private movieService: MovieService){}

    resolve(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot) : Observable<Page> | Promise<any> | any {
        return this.movieService.requestMovies().pipe(
            map((movies: Page) => {
                movies.results = this.movieService.sortByEpisodeId(movies.results)

                return movies;
            })
        );
    }
}