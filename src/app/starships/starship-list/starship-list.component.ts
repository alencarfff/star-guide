import { Component, OnInit } from '@angular/core';
import { EntityEnum } from 'src/app/core/models/entity.enum';
import { PageableModel } from 'src/app/core/models/pageable.model';
import StarshipModel from 'src/app/core/models/starship.model';
import { ActivatedRoute, Router } from '@angular/router';
import UtilService  from 'src/app/core/util.service';
import { StarshipService } from 'src/app/core/services/starship.service';

@Component({
  selector: 'sw-starship-list',
  templateUrl: './starship-list.component.html',
  styleUrls: ['./starship-list.component.scss']
})
export class StarshipListComponent implements OnInit {
  private readonly actualEntity: EntityEnum = EntityEnum.STARSHIP;
  private searchValue: string = null;
  private pageable: PageableModel = { next: null, previous: null, page: 1 };
  private starships: StarshipModel[] = [];
  
  constructor(private activatedRoute: ActivatedRoute, 
    private starshipService: StarshipService,
    private utilService: UtilService,
    private router: Router) {}
  
  ngOnInit() {
    const response = this.activatedRoute.snapshot.parent.data['starships'];

    this.starships = response.results;
    this.pageable.next = response.next;
    this.pageable.previous = response.previous;
    this.starshipService.savePage(response, this.pageable.page);
  }

  request(){
    const response = this.starshipService.getPage(this.pageable.page);

    if( response ){
      this.starships = response.results;
    }
    else {
      this.update();
    }
  }

  update(){
    this.starshipService.requestPage(this.pageable.page, this.searchValue).subscribe(response => {
      this.starships = response.results;
      this.pageable.next = response.next;
      this.pageable.previous = response.previous;      

      this.starshipService.savePage(response.results, this.pageable.page);
    });
  }

  search(value: string){
    this.searchValue = value;
    this.starshipService
      .search(value, this.actualEntity)
      .subscribe(response => {
        this.starships = response.results;
        this.pageable.next = response.next;
        this.pageable.previous = response.previous;
        this.pageable.page = 1; 
      });
  }

  getImage(url: string) : string {
    return this.utilService.getEntityImage(url, this.actualEntity);
  }

  getId(starship: StarshipModel) : number {
    return this.utilService.getEntityId(starship.url);
  }

  goToDetail(position: number){
    const starship = this.starships[position];
    this.starshipService.starship = starship;

    this.router.navigate(['starships', this.getId(starship)]);
  }
}
