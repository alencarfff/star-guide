import { Injectable, Output, EventEmitter } from '@angular/core';
import CharacterModel from '../models/character.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment'
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CharacterService {
  private url: string = environment.url;

  private _characters: CharacterModel[];
  private _character: CharacterModel;
  private characterUpdate = new EventEmitter<CharacterModel>();

  constructor(private http: HttpClient){}

  requestCharacters() : Observable<CharacterModel[]>{
    return this.http.get<CharacterModel[]>(`${this.url}/people`);
  }

  requestCharacterByUrl(url: string){
    return this.http.get<CharacterModel>(`${url}`);
  }

  set characters(characters: CharacterModel[]){
    this._characters = characters;
  }
  get characters(){
    return this._characters;
  }

  set character(character: CharacterModel){
    this._character = character;
  }
  get character(){
    return this._character;
  }
}
