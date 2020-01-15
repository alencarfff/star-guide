import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'
import { Observable } from 'rxjs';
import CachedPagination from '../classes/cached-pagination.class';
import VehicleModel from '../models/vehicle.model';

@Injectable({ providedIn: 'root' })
export class VehicleService extends CachedPagination {
  private url: string = environment.url + "/vehicles";
  private _vehicle: VehicleModel;

  requestPage(page: number, search: string) : Observable<any>{
    return super.requestPage(page, search, this.url);
  }

  set vehicle(vehicle: VehicleModel){
    this._vehicle = vehicle;
  }
  get vehicle(){
    return this._vehicle;
  }
}