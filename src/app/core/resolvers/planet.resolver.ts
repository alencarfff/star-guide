import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import PlanetModel from '../models/planet.model';
import { PlanetService } from '../services/planet.service';

@Injectable({ providedIn: 'root' })
export class PlanetResolve implements Resolve<PlanetModel> {
    constructor(private planetService: PlanetService){}

    resolve(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot) : Observable<PlanetModel[]> | Promise<any> | any {
        return this.planetService.requestPage(1, null);
    }
}