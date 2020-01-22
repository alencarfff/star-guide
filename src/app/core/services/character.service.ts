import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment'

import { EntityEnum } from '../models/entity.enum';
import CharacterModel from '../models/character.model';
import CacheTools from '../classes/cache-tools.class';

@Injectable({ providedIn: 'root' })
export default class CharacterService extends CacheTools {
  private url: string = environment.url + "/people/";
  
  requestPage(page: number, search: string) : Observable<any>{
    return super.requestPage(page, search, this.url);
  }
  requestById(id: number, entity: EntityEnum) : Observable<CharacterModel> {
    return super.requestById(id, entity)
  }
}