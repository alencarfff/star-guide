import { Component, Injector } from '@angular/core';
import { EntityEnum } from 'src/app/core/models/entity.enum';
import { PageableModel } from 'src/app/core/models/pageable.model';
import { ActivatedRoute, Router } from '@angular/router';
import UtilService from 'src/app/core/util.service';
import RouteInterface from 'src/app/core/interfaces/route.interface';

@Component({
  selector: 'sw-entity-list',
  templateUrl: './entity-list.component.html',
  styleUrls: ['./entity-list.component.scss']
})
export class EntityListComponent implements RouteInterface {
  protected pageable: PageableModel;
  protected searchValue: string = null;

  protected activatedRoute: ActivatedRoute;
  protected utilService: UtilService;
  protected router: Router;

  constructor(injector: Injector,
    private entityService: any,
    private entityEnum: EntityEnum) {

    this.pageable = { next: null, previous: null, page: 1 }

    this.activatedRoute = injector.get(ActivatedRoute);
    this.utilService = injector.get(UtilService);
    this.router = injector.get(Router);
  }

  loadDataFromRouteOrRequest(fillDataCb: Function){
    const routeData = this.getRouteData();

    if( routeData ){
      this.entityService.savePage(routeData, this.pageable.page);

      fillDataCb(routeData.results, null);
    }
    else {
      this.request(fillDataCb);
    }
  }

  getRouteData(){
    return this.activatedRoute.snapshot.parent.data[this.entityEnum] || null;
  }

  private request(fillDataCb: Function){
    const page = this.entityService.getPage(this.pageable.page);

    if( page ){
      fillDataCb(page.results, null);
    }
    else {
      const subcription = this.entityService
        .requestPage(this.pageable.page, this.searchValue)
        .subscribe(page => {
          this.entityService.savePage(page, this.pageable.page);

          fillDataCb(page.results, subcription);
        });
    }
  }

  search(value: string, updateCb: Function){
    this.searchValue = value;
    this.entityService
      .search(value, this.entityEnum)
      .subscribe(page => {
        this.pageable.previous = page.previous;
        this.pageable.next = page.next;
        this.pageable.page = 1;

        updateCb({ search: this.search, page });
      });
  }

  getImage(url: string) : string {
    return this.utilService.getEntityImage(url, this.entityEnum);
  }

  getId(entity: any) : number {
    return this.utilService.getEntityId(entity.url);
  }

  goToDetail(path: string, position: number){
    const page = this.entityService.getPage(this.pageable.page);
    const vehicle = page.results[position];

    this.entityService.setPreloadedItem = vehicle;
    this.router.navigate([`${path}`, this.getId(vehicle)]);
  }
}
