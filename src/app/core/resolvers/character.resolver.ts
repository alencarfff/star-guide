import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import CharacterModel from '../models/character.model';
import { CharacterService } from '../services/character.service';

@Injectable({ providedIn: 'root' })
export class CharacterResolver implements Resolve<CharacterModel> {
    constructor(private characterService: CharacterService){}

    resolve(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot) : Observable<CharacterModel[]> | Promise<any> | any {
        return this.characterService.requestPage(1, null);
    }
}