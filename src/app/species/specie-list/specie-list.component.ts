import { Component, OnInit } from '@angular/core';
import RouteInterface from 'src/app/core/interfaces/route.interface';
import { EntityEnum } from 'src/app/core/models/entity.enum';
import { PageableModel } from 'src/app/core/models/pageable.model';
import SpecieModel from 'src/app/core/models/specie.model';
import { SpecieService } from 'src/app/core/services/specie.service';
import UtilService  from 'src/app/core/util.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sw-specie-list',
  templateUrl: './specie-list.component.html',
  styleUrls: ['./specie-list.component.scss']
})
export class SpecieListComponent implements OnInit {
  private pageable: PageableModel = { next: null, previous: null, page: 1 };
  private readonly actualEntity: EntityEnum = EntityEnum.SPECIE;
  private searchValue: string = null;
  private species: SpecieModel[] = [];
  
  constructor(private activatedRoute: ActivatedRoute, 
    private specieService: SpecieService,
    private utilService: UtilService,
    private router: Router) {}
  
  ngOnInit() {
    const response = this.activatedRoute.snapshot.parent.data['species'];

    this.species = response.results;
    this.pageable.next = response.next;
    this.pageable.previous = response.previous;
    this.specieService.savePage(response, this.pageable.page);
  }

  request(){
    const page = this.specieService.getPage(this.pageable.page);

    if( page ){
      this.species = page.results;
    }
    else {
      this.update();
    }
  }

  update(){
    this.specieService.requestPage(this.pageable.page, null).subscribe(response => {
      this.species = response.results;
      this.pageable.next = response.next;
      this.pageable.previous = response.previous;      

      this.specieService.savePage(response.results, this.pageable.page);
    });
  }

  search(value: string){
    this.searchValue = value;
    this.specieService
      .search(value, this.actualEntity)
      .subscribe(response => {
        this.species = response.results;
        this.pageable.next = response.next;
        this.pageable.previous = response.previous;
        this.pageable.page = 1; 
      });
  }

  getImage(url: string) : string {
    return this.utilService.getEntityImage(url, this.actualEntity);
  }

  getId(specie: SpecieModel) : number {
    return this.utilService.getEntityId(specie.url);
  }

  goToDetail(position: number){
    const page = this.specieService.getPage(this.pageable.page);
    const specie = page.results[position]

    this.specieService.specie = specie;

    this.router.navigate(['species', this.getId(specie)]);
  }
}