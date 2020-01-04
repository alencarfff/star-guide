import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import MovieModel from '../models/movie.model';

@Injectable({
    providedIn: "root"
})
export default class MovieService {
    private url: string = environment.url;

    constructor(private http: HttpClient){}

    getMovies() : Observable<any>{
        return this.http.get<any>(`${this.url}/films`);
    }

    sortByEpisodeId(movies: MovieModel[]){
        return movies.sort((a ,b) => a.episode_id - b.episode_id);
    }
}