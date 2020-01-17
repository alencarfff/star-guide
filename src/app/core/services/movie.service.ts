import { HttpClient } from '@angular/common/http';
import { Injectable, Output, EventEmitter, Injector } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import MovieModel from '../models/movie.model';
import CacheTools from '../classes/cache-tools.class';
import Page from '../models/page.model';
import { EntityEnum } from '../models/entity.enum';

@Injectable({
    providedIn: "root"
})
export default class MovieService extends CacheTools {
    private url: string = environment.url + "/films/";
    private movieUpdated = new EventEmitter<MovieModel>();

    constructor(injector: Injector){ 
        super(injector)
    }

    requestMovies() : Observable<Page>{
        return super.requestPage(1, null, `${this.url}`);
    }
    requestById(id: number) : Observable<MovieModel>{
        return super.requestById(id, EntityEnum.MOVIE);
    }
    getMovieByUrl(url: string) : Observable<MovieModel> {
        return super.requestByUrl(url);
    }
    sortByEpisodeId(movies: MovieModel[]){
        return movies.sort((a: MovieModel, b: MovieModel) => a.episode_id - b.episode_id);
    }
    observeMovieChange(){
        return this.movieUpdated.asObservable();
    }
    getMovieFromRoute = (position: number) => {
        const movies = this.getPage(1);

        return movies[position - 1];
    }
}