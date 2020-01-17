import { Component, OnInit, Injector } from '@angular/core';
import { Subscription } from 'rxjs';

import { EntityEnum } from 'src/app/core/models/entity.enum';
import EntityInfo from 'src/app/core/models/entity-info.model';
import VehicleModel from 'src/app/core/models/vehicle.model';
import MovieModel from 'src/app/core/models/movie.model';

import { EntityDetailComponent } from 'src/app/shared/components/entity-detail/entity-detail.component';
import { VehicleService } from 'src/app/core/services/vehicle.service';

@Component({
  selector: 'sw-vehicle-detail',
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.scss']
})
export class VehicleDetailComponent extends EntityDetailComponent implements OnInit {
  private relatedMovies: MovieModel[] = [];
  private vehicle: VehicleModel = null;
  private id: number = null;
  
  constructor(injector: Injector, 
    private vehicleService: VehicleService) {
    
    super(injector);
  }

  ngOnInit() {
    this.loadFromCacheOrRequestEntity(this.vehicleService, EntityEnum.VEHICLE, this.fill.bind(this))
  }

  fill(info: EntityInfo, subscription: Subscription) {
    this.vehicle = info.entity;
    this.id = info.id;
    this.relatedMovies = info.relatedMovies;

    if( subscription ) 
      subscription.unsubscribe();
  }
}