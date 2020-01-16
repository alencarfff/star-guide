import { Component, OnInit } from '@angular/core';
import StarshipModel from 'src/app/core/models/starship.model';
import MovieModel from 'src/app/core/models/movie.model';
import MovieService from 'src/app/core/services/movie.service';
import { UtilService } from 'src/app/core/util.service';
import { StarshipService } from 'src/app/core/services/starship.service';
import { ActivatedRoute } from '@angular/router';
import { EntityEnum } from 'src/app/core/models/entity.enum';

@Component({
  selector: 'sw-starship-detail',
  templateUrl: './starship-detail.component.html',
  styleUrls: ['./starship-detail.component.scss']
})
export class StarshipDetailComponent implements OnInit {
  private starship: StarshipModel;
  private starshipId: number;
  private relatedMovies: MovieModel[] = [];

  constructor(private movieService: MovieService,
              private utilService: UtilService,
              private starshipService: StarshipService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const starship = this.starshipService.starship || null;
    
    if( starship ) {
      this.starship = starship;
      this.starshipId = this.utilService.getEntityId(starship.url);
      this.relatedMovies = this.utilService.getEntityRelatedMovies(this.movieService, starship);        
    }
    else {
      this.request();
    }
  }

  request(){
    const id = +this.activatedRoute.snapshot.params['id']
    this.starshipService
      .requestById(id, EntityEnum.STARSHIP)
      .subscribe(starship => {
        this.starship = starship;
        this.starshipId = this.utilService.getEntityId(starship.url);
        this.relatedMovies = this.utilService.getEntityRelatedMovies(this.movieService, starship);        
      });
  }
}
