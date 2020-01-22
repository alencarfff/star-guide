import { Component, OnInit, Injector } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import MovieModel from 'src/app/core/models/movie.model';
import MovieService from 'src/app/core/services/movie.service';
import UtilService  from 'src/app/core/util.service';
import CacheTools from 'src/app/core/classes/cache-tools.class';
import { EntityEnum } from 'src/app/core/models/entity.enum';
import { EntityDetailComponent } from 'src/app/shared/components/entity-detail/entity-detail.component';
import { Subscription } from 'rxjs';
import EntityInfo from 'src/app/core/models/entity-info.model';

@Component({
  selector: 'sw-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: [
    './movie-detail.component.scss',
  ]
})
export class MovieDetailComponent extends EntityDetailComponent implements OnInit {
  private movie: MovieModel;
  private movieId: number = 0;
  private textIsPlaying: boolean = false;

  constructor(injector: Injector) { 
    super(injector);            
  }

  ngOnInit() {
    super.loadFromCacheOrRequestEntity(this.movieService, EntityEnum.MOVIE, this.fill.bind(this));
    
    this.activateStopTextTimer();
  }

  fill(info: EntityInfo, subscription: Subscription) {    
    console.log(info)
    this.movie = info.entity;
    this.movieId = this.movie.episode_id;

    if( subscription ) {
      subscription.unsubscribe();
    }
  }

  skipOrShowText(){
    if( this.textIsPlaying ) {
      this.textIsPlaying = false;
    }
    else {
      this.textIsPlaying = true;
      this.activateStopTextTimer()
    }
  }

  activateStopTextTimer(){
    let self = this;
    setTimeout(() => {
      self.textIsPlaying = false
    }, 88 * 1000);
  }

  toRoman(num: number){
    return this.utilService.toRoman(num);
  }
}
