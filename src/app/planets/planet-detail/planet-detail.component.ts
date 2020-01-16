import { Component, OnInit } from '@angular/core';
import MovieModel from 'src/app/core/models/movie.model';
import PlanetModel from 'src/app/core/models/planet.model';
import MovieService from 'src/app/core/services/movie.service';
import { UtilService } from 'src/app/core/util.service';
import { PlanetService } from 'src/app/core/services/planet.service';
import { ActivatedRoute } from '@angular/router';
import { EntityEnum } from 'src/app/core/models/entity.enum';

@Component({
  selector: 'sw-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.scss']
})
export class PlanetDetailComponent implements OnInit {
  private planet: PlanetModel;
  private planetId: number;
  private relatedMovies: MovieModel[] = [];

  constructor(private movieService: MovieService,
              private utilService: UtilService,
              private planetService: PlanetService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const planet = this.planetService.planet || null;
    
    if( planet ) {
      this.planet = planet;
      this.planetId = this.utilService.getEntityId(planet.url);
      this.relatedMovies = this.utilService.getEntityRelatedMovies(this.movieService, planet);        
    }
    else {
      this.request();
    }
  }

  request(){
    const id = +this.activatedRoute.snapshot.params['id']
    this.planetService
      .requestById(id, EntityEnum.PLANET)
      .subscribe(planet => {
        this.planet = planet;
        this.planetId = this.utilService.getEntityId(planet.url);
        this.relatedMovies = this.utilService.getEntityRelatedMovies(this.movieService, planet);        
      });
  }
}
