import { Component, OnInit } from '@angular/core';
import { EntityEnum } from 'src/app/core/models/entity.enum';
import RouteInterface from 'src/app/core/interfaces/route.interface';
import { PageableModel } from 'src/app/core/models/pageable.model';
import VehicleModel from 'src/app/core/models/vehicle.model';
import { ActivatedRoute, Router } from '@angular/router';
import { VehicleService } from 'src/app/core/services/vehicle.service';
import { UtilService } from 'src/app/core/util.service';

@Component({
  selector: 'sw-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss']
})
export class VehicleListComponent implements OnInit, RouteInterface {
  private readonly actualEntity: EntityEnum = EntityEnum.VEHICLE;
  private searchValue: string = null; 
  private pageable: PageableModel = { next: null, previous: null, page: 1 };
  private vehicles: VehicleModel[] = [];
  
  constructor(private activatedRoute: ActivatedRoute, 
    private vehicleService: VehicleService,
    private utilService: UtilService,
    private router: Router) {}
  
  ngOnInit() {
    const response = this.activatedRoute.snapshot.parent.data['vehicles'];

    this.vehicles = response.results;
    this.pageable.next = response.next;
    this.pageable.previous = response.previous;
    this.vehicleService.savePage(this.vehicles, this.pageable.page);
  }

  request(){
    const vehicles = this.vehicleService.getPage(this.pageable.page);

    if( vehicles.length > 0 ){
      this.vehicles = vehicles;
    }
    else {
      this.update();
    }
  }

  update(){
    this.vehicleService.requestPage(this.pageable.page, null).subscribe(response => {
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
    const vehicle = this.vehicleService[position];
    this.vehicleService.vehicle = vehicle;

    this.router.navigate(['vehicles', this.getId(vehicle)]);
  }
}