import { Component, OnInit, Injector } from '@angular/core';
import { EntityEnum } from 'src/app/core/models/entity.enum';
import VehicleModel from 'src/app/core/models/vehicle.model';
import { VehicleService } from 'src/app/core/services/vehicle.service';
import { Subscription } from 'rxjs';
import { PageableModel } from 'src/app/core/models/pageable.model';
import { ActivatedRoute, Router } from '@angular/router';
import UtilService from 'src/app/core/util.service';

@Component({
  selector: 'sw-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss']
})
export class VehicleListComponent implements OnInit {
  private vehicles: VehicleModel[] = [];
  private pageable: PageableModel;
  private searchValue: string = "";
  private actualEntity = EntityEnum.VEHICLE;

  constructor(injector: Injector,
    private vehicleService: VehicleService,
    private activatedRoute: ActivatedRoute,
    private utilService: UtilService,
    private router: Router) {
      this.pageable = { next: null, previous: null, page: 1 }

    // super(injector, vehicleService, EntityEnum.VEHICLE);
  }

  // ngOnInit() {
  //   // this.loadDataFromRouteOrRequest(this.fill.bind(this));
  // }

  fill(results: any, subscription: Subscription){
    this.vehicles = results;

    if( subscription )
      subscription.unsubscribe();
  }

  ngOnInit() {
    const response = this.activatedRoute.snapshot.parent.data['vehicles'];

    this.vehicles = response.results;
    this.pageable.next = response.next;
    this.pageable.previous = response.previous;
    this.vehicleService.savePage(response, this.pageable.page);
  }

  request(){
    const response = this.vehicleService.getPage(this.pageable.page);

    if( response ){
      this.vehicles = response.results;
    }
    else {
      this.update();
    }
  }

  update(){
    this.vehicleService.requestPage(this.pageable.page, this.searchValue).subscribe(response => {
      this.vehicles = response.results;
      this.pageable.next = response.next;
      this.pageable.previous = response.previous;

      this.vehicleService.savePage(response.results, this.pageable.page);
    });
  }

  search(value: string){
    this.searchValue = value;
    this.vehicleService
      .search(value, this.actualEntity)
      .subscribe(response => {
        this.vehicles = response.results;
        this.pageable.next = response.next;
        this.pageable.previous = response.previous;
        this.pageable.page = 1;
      });
  }

  getImage(url: string) : string {
    return this.utilService.getEntityImage(url, this.actualEntity);
  }

  getId(vehicle: VehicleModel) : number {
    return this.utilService.getEntityId(vehicle.url);
  }

  goToDetail(position: number){
    const vehicle = this.vehicles[position];
    this.vehicleService.setPreloadedItem = vehicle;

    this.router.navigate(['vehicles', this.getId(vehicle)]);
  }
}
