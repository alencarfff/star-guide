import { HttpClient } from '@angular/common/http';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import MovieModel from '../models/movie.model';

@Injectable({
    providedIn: "root"
})
export default class MovieService {
    private url: string = environment.url;

    private _movies: MovieModel[];
    private _movie: MovieModel;
    private movieUpdated = new EventEmitter<MovieModel>();

    constructor(private http: HttpClient){}

    requestMovies() : Observable<MovieModel[]>{
        return this.http.get<MovieModel[]>(`${this.url}/films`);
    }

    getMovieByUrl(url: string) : Observable<MovieModel> {
        return this.http.get<MovieModel>(url);
    }

    sortByEpisodeId(movies: MovieModel[]){
        return movies.sort((a: MovieModel, b: MovieModel) => a.episode_id - b.episode_id);
    }

    find(a){
        return this.http.get(`${this.url}/${a}`);
    }

    get movies() : MovieModel[] {
        return this._movies;
    }
    set movies(movies: MovieModel[]) {
        this._movies = movies;
    }

    observeMovieChange(){
        return this.movieUpdated.asObservable();
    }

    set movie (movie: MovieModel){ 
        this._movie = movie;
        this.movieUpdated.emit(movie);
    }
    get movie() : MovieModel { 
        return this._movie;
    }

    getMovieFromRoute = (position: number) => this.movies[position - 1];
}