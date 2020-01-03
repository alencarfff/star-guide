import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: "root"})
export default class HeaderService {
    private url: string = environment.url;

    constructor(private http: HttpClient){}

    getMovies() : Observable<any>{
        return this.http.get<any>(`${this.url}/films`);
    }
}