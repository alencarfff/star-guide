import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { StarshipService } from '../services/starship.service';

@Injectable({ providedIn: 'root' })
export class StarshipResolve implements Resolve<StarshipResolve> {
    constructor(private starshipService: StarshipService){}

    resolve(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot) : Observable<StarshipResolve[]> | Promise<any> | any {
        return this.starshipService.requestPage(1);
    }
}