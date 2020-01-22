import { Component, OnInit } from '@angular/core';
import { PageableModel } from 'src/app/core/models/pageable.model';
import { ActivatedRoute, Router } from '@angular/router';
import UtilService  from 'src/app/core/util.service';
import { EntityEnum } from 'src/app/core/models/entity.enum';
import PlanetModel from 'src/app/core/models/planet.model';
import { PlanetService } from 'src/app/core/services/planet.service';
import RouteInterface from 'src/app/core/interfaces/route.interface';
import SearchInterface from 'src/app/core/interfaces/search.interface';

@Component({
  selector: 'sw-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.scss']
})
export class PlanetListComponent implements OnInit {
  private readonly actualEntity: EntityEnum = EntityEnum.PLANET;
  private searchValue: string = null;
  private pageable: PageableModel = { next: null, previous: null, page: 1 };
  private planets: PlanetModel[] = [];
  
  constructor(private activatedRoute: ActivatedRoute, 
    private planetService: PlanetService,
    private utilService: UtilService,
    private router: Router) {}
  
  ngOnInit() {
    const response = this.activatedRoute.snapshot.parent.data['planets'];

    this.planets = response.results;
    this.pageable.next = response.next;
    this.pageable.previous = response.previous;
    this.planetService.savePage(response, this.pageable.page);
  }

  request(){
    const page = this.planetService.getPage(this.pageable.page);

    if( page ){
      this.planets = page.results;
    }
    else {
      this.update();
    }
  }

  update(){
    this.planetService
      .requestPage(this.pageable.page, null)
      .subscribe(response => {
        this.planets = response.results;
        this.pageable.next = response.next;
        this.pageable.previous = response.previous;      

        this.planetService.savePage(response.results, this.pageable.page);
    });
  }

  search(value: string) {
    if( this.searchValue === value ) return;
    
    this.searchValue = value;
    this.planetService
      .search(value, this.actualEntity)
      .subscribe(response => {
        this.planets = response.results;
        this.pageable.next = response.next;
        this.pageable.previous = response.previous;
        this.pageable.page = 1; 
      });
  }

  getImage(url: string) : string {
    return this.utilService.getEntityImage(url, this.actualEntity);
  }

  getId(planet: PlanetModel) : number {
    return this.utilService.getEntityId(planet.url);
  }

  goToDetail(position: number){
    const planet = this.planets[position];
    this.planetService.planet = planet;

    this.router.navigate(['planets', this.getId(planet)]);
  }
}