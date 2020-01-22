import { Component, OnInit, Injector } from '@angular/core';
import StarshipModel from 'src/app/core/models/starship.model';
import MovieModel from 'src/app/core/models/movie.model';
import MovieService from 'src/app/core/services/movie.service';
import UtilService  from 'src/app/core/util.service';
import { StarshipService } from 'src/app/core/services/starship.service';
import { ActivatedRoute } from '@angular/router';
import { EntityEnum } from 'src/app/core/models/entity.enum';
import { EntityDetailComponent } from 'src/app/shared/components/entity-detail/entity-detail.component';
import EntityInfo from 'src/app/core/models/entity-info.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'sw-starship-detail',
  templateUrl: './starship-detail.component.html',
  styleUrls: ['./starship-detail.component.scss']
})
export class StarshipDetailComponent extends EntityDetailComponent implements OnInit {
  private starship: StarshipModel = null;
  private starshipId: number;
  private relatedMovies: MovieModel[] = [];

  constructor(injector: Injector, private starshipService: StarshipService) { 
      super(injector)
  }

  ngOnInit() {
    this.loadFromCacheOrRequestEntity(this.starshipService, EntityEnum.STARSHIP, this.fill.bind(this));
  }

  fill(info: EntityInfo, subscription: Subscription) {
    this.starship = info.entity;
    this.starshipId = info.id;
    this.relatedMovies = info.relatedMovies;

    if( subscription ) {
      subscription.unsubscribe();
    }
  }
}
