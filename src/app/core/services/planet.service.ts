import { Injectable } from '@angular/core';
import PlanetModel from '../models/planet.model';
import { environment } from 'src/environments/environment'
import { Observable } from 'rxjs';
import CachedPagination from '../classes/cached-pagination.class';

@Injectable({ providedIn: 'root' })
export class PlanetService extends CachedPagination {
  private url: string = environment.url + "/planets";

  private _planets: PlanetModel[][] = new Array();
  private _planet: PlanetModel;

  requestPage(page: number) : Observable<any>{
    return super.requestPage(page, this.url);
  }
  requestByUrl(url: string) : Observable<PlanetModel>{
    return super.requestByUrl(url);
  }
  savePage(planets: PlanetModel[], page: number) {
    super.savePage(planets, page);
  }
  getPage(page: number) : PlanetModel[]{
    return super.getPage(page);
  }

  set planet(planet: PlanetModel){
    this._planet = planet;
  }
  get planet(){
    return this._planet;
  }
}
