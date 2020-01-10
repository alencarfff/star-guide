import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import SpecieModel from '../models/specie.model';
import { SpecieService } from '../services/specie.service';

@Injectable({ providedIn: 'root' })
export class SpecieResolver implements Resolve<SpecieModel> {
    constructor(private SpecieService: SpecieService){}

    resolve(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot) : Observable<SpecieModel[]> | Promise<any> | any {
        return this.SpecieService.requestPage(1);
    }
}