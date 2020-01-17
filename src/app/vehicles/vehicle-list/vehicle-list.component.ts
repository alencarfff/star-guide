import { Component, OnInit, Injector } from '@angular/core';
import { EntityEnum } from 'src/app/core/models/entity.enum';
import VehicleModel from 'src/app/core/models/vehicle.model';
import { VehicleService } from 'src/app/core/services/vehicle.service';
import { EntityListComponent } from 'src/app/shared/components/entity-list/entity-list.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'sw-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss']
})
export class VehicleListComponent extends EntityListComponent implements OnInit {
  private vehicles: VehicleModel[] = [];

  constructor(injector: Injector, vehicleService: VehicleService) {
    super(injector, vehicleService, EntityEnum.VEHICLE);
  }
  
  ngOnInit() {
    this.loadDataFromRouteOrRequest(this.fill.bind(this));
  }

  fill(results: any, subscription: Subscription){
    this.vehicles = results;

    if( subscription )
      subscription.unsubscribe();
  }
}