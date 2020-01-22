import { Component, OnInit, Injector, Input } from '@angular/core';
import MovieService from 'src/app/core/services/movie.service';
import UtilService  from 'src/app/core/util.service';
import { ActivatedRoute } from '@angular/router';
import { EntityEnum } from 'src/app/core/models/entity.enum';

@Component({
  selector: 'sw-entity-detail',
  templateUrl: './entity-detail.component.html',
  styleUrls: ['./entity-detail.component.scss']
})
export class EntityDetailComponent {
  @Input() private title: string = "";
  @Input() private imagePath: string = "";
  @Input() private entity: string = "";
  protected movieService: MovieService;
  protected utilService: UtilService;
  protected activatedRoute: ActivatedRoute;

  constructor(injector: Injector) {
    this.movieService = injector.get(MovieService);
    this.utilService = injector.get(UtilService);
    this.activatedRoute = injector.get(ActivatedRoute);
  }

  loadFromCacheOrRequestEntity(entityService: any, entityEnum: EntityEnum, fillDataCb: Function) {
    const entity = entityService.getPreloadedItem || null;

    if( entity ) {
      const id = this.utilService.getEntityId(entity.url);
      const relatedMovies = this.utilService.getEntityRelatedMovies(this.movieService, entity);

      fillDataCb({ entity, id, relatedMovies}, null)
    }
    else {
      const id = +this.activatedRoute.snapshot.params['id'];
      const subscription = entityService.requestById(id, entityEnum).subscribe(entity => {
        const relatedMovies = this.utilService.getEntityRelatedMovies(this.movieService, entity);

        fillDataCb({ entity, id, relatedMovies }, subscription);
      }, err => console.error(err));
    }
  }
}
