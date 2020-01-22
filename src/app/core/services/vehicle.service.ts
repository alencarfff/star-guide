import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'
import { Observable } from 'rxjs';

import CacheTools from '../classes/cache-tools.class';

@Injectable({ providedIn: 'root' })
export class VehicleService extends CacheTools {
  private url: string = environment.url + "/vehicles/";

  requestPage(page: number, search: string) : Observable<any>{
    return super.requestPage(page, search, this.url);
  }
}