import { Injectable, Output, EventEmitter } from '@angular/core';
import CharacterModel from '../models/character.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment'
import { Observable } from 'rxjs';
import CachedPagination from '../classes/cached-pagination.class';
import { EntityEnum } from '../models/entity.enum';

@Injectable({ providedIn: 'root' })
export class CharacterService extends CachedPagination {
  private url: string = environment.url + "/people";
  private _character: CharacterModel;

  requestPage(page: number, search: string) : Observable<any>{
    return super.requestPage(page, search, this.url);
  }
  requestById(id: number, entity: EntityEnum) : Observable<CharacterModel> {
    return super.requestById(id, entity)
  }

  set character(character: CharacterModel){
    this._character = character;
  }
  get character(){
    return this._character;
  }
}
