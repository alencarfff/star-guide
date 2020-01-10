import { Injectable, Output, EventEmitter } from '@angular/core';
import CharacterModel from '../models/character.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment'
import { Observable } from 'rxjs';
import CachedPagination from '../classes/cached-pagination.class';

@Injectable({ providedIn: 'root' })
export class CharacterService extends CachedPagination {
  private url: string = environment.url + "/people";

  private _characters: CharacterModel[][] = new Array();
  private _character: CharacterModel;
  // private characterUpdate = new EventEmitter<CharacterModel>();

  requestPage(page: number) : Observable<any>{
    return super.requestPage(page, this.url);
  }
  requestByUrl(url: string) : Observable<CharacterModel>{
    return super.requestByUrl(url);
  }
  savePage(characters: CharacterModel[], page: number) {
    super.savePage(characters, page);
  }
  getPage(page: number) : CharacterModel[]{
    return super.getPage(page);
  }

  set character(character: CharacterModel){
    this._character = character;
  }
  get character(){
    return this._character;
  }
}
