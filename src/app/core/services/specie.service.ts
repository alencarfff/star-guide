import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'
import { Observable } from 'rxjs';
import CachedPagination from '../classes/cached-pagination.class';
import SpecieModel from '../models/specie.model';

@Injectable({ providedIn: 'root' })
export class SpecieService extends CachedPagination {
  private url: string = environment.url + "/species";
  private _specie: SpecieModel;

  requestPage(page: number, search: string) : Observable<any>{
    return super.requestPage(page, search, this.url);
  }

  set specie(specie: SpecieModel){
    this._specie = specie;
  }
  get specie(){
    return this._specie;
  }
}
