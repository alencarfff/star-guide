import { Injectable } from '@angular/core';
import PlanetModel from '../models/planet.model';
import { environment } from 'src/environments/environment'
import { Observable } from 'rxjs';
import CachedPagination from '../classes/cached-pagination.class';

@Injectable({ providedIn: 'root' })
export class PlanetService extends CachedPagination {
  private url: string = environment.url + "/planets";
  private _planet: PlanetModel;

  requestPage(page: number, search: string) : Observable<any>{
    return super.requestPage(page, search, this.url);
  }

  requestByUrl(url: string) : Observable<PlanetModel> {
    return super.requestByUrl(url);
  }

  set planet(planet: PlanetModel){
    this._planet = planet;
  }
  get planet(){
    return this._planet;
  }
}
