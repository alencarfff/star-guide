import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'
import { Observable } from 'rxjs';
import CachedPagination from '../classes/cached-pagination.class';
import SpecieModel from '../models/specie.model';

@Injectable({ providedIn: 'root' })
export class SpecieService extends CachedPagination {
  private url: string = environment.url + "/species";

  private _species: SpecieModel[][] = new Array();
  private _specie: SpecieModel;

  requestPage(page: number) : Observable<any>{
    return super.requestPage(page, this.url);
  }
  requestByUrl(url: string) : Observable<SpecieModel>{
    return super.requestByUrl(url);
  }
  savePage(species: SpecieModel[], page: number) {
    super.savePage(species, page);
  }
  getPage(page: number) : SpecieModel[]{
    return super.getPage(page);
  }

  set specie(specie: SpecieModel){
    this._specie = specie;
  }
  get specie(){
    return this._specie;
  }
}
