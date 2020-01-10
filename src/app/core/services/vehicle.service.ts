import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'
import { Observable } from 'rxjs';
import CachedPagination from '../classes/cached-pagination.class';
import VehicleModel from '../models/vehicle.model';

@Injectable({ providedIn: 'root' })
export class VehicleService extends CachedPagination {
  private url: string = environment.url + "/vehicles";

  private _vehicles: VehicleModel[][] = new Array();
  private _vehicle: VehicleModel;

  requestPage(page: number) : Observable<any>{
    return super.requestPage(page, this.url);
  }
  requestByUrl(url: string) : Observable<VehicleModel>{
    return super.requestByUrl(url);
  }
  savePage(vehicles: VehicleModel[], page: number) {
    super.savePage(vehicles, page);
  }
  getPage(page: number) : VehicleModel[]{
    return super.getPage(page);
  }

  set vehicle(vehicle: VehicleModel){
    this._vehicle = vehicle;
  }
  get vehicle(){
    return this._vehicle;
  }
}