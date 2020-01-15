import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'
import { Observable } from 'rxjs';
import CachedPagination from '../classes/cached-pagination.class';
import StarshipModel from '../models/starship.model';

@Injectable({ providedIn: 'root' })
export class StarshipService extends CachedPagination {
  private url: string = environment.url + "/starships";
  private _starship: StarshipModel;

  requestPage(page: number, search: string) : Observable<any>{
    return super.requestPage(page, search, this.url);
  }
  
  set starship(starship: StarshipModel){
    this._starship = starship;
  }
  get starship(){
    return this._starship;
  }
}
