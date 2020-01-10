import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'
import { Observable } from 'rxjs';
import CachedPagination from '../classes/cached-pagination.class';
import StarshipModel from '../models/starship.model';

@Injectable({ providedIn: 'root' })
export class StarshipService extends CachedPagination {
  private url: string = environment.url + "/starships";

  private _starships: StarshipModel[][] = new Array();
  private _starship: StarshipModel;

  requestPage(page: number) : Observable<any>{
    return super.requestPage(page, this.url);
  }
  requestByUrl(url: string) : Observable<StarshipModel>{
    return super.requestByUrl(url);
  }
  savePage(starships: StarshipModel[], page: number) {
    super.savePage(starships, page);
  }
  getPage(page: number) : StarshipModel[]{
    return super.getPage(page);
  }

  set starship(starship: StarshipModel){
    this._starship = starship;
  }
  get starship(){
    return this._starship;
  }
}
