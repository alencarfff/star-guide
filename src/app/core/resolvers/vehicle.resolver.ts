import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import VehicleModel from '../models/vehicle.model';
import { VehicleService } from '../services/vehicle.service';

@Injectable({ providedIn: 'root' })
export class VehicleResolver implements Resolve<VehicleModel> {
    constructor(private VehicleService: VehicleService){}

    resolve(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot) : Observable<VehicleModel[]> | Promise<any> | any {
        return this.VehicleService.requestPage(1, null);
    }
}