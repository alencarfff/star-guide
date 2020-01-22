import { Component, OnInit, Injector } from '@angular/core';
import { Subscription } from 'rxjs';

import MovieModel from 'src/app/core/models/movie.model';
import PlanetModel from 'src/app/core/models/planet.model';
import CharacterModel from 'src/app/core/models/character.model';
import { EntityEnum } from 'src/app/core/models/entity.enum';

import CharacterService from 'src/app/core/services/character.service';
import { PlanetService } from 'src/app/core/services/planet.service';
import { EntityDetailComponent } from 'src/app/shared/components/entity-detail/entity-detail.component';
import EntityInfo from 'src/app/core/models/entity-info.model';

@Component({
  selector: 'sw-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: [
    './character-detail.component.scss', 
  ]
})
export class CharacterDetailComponent extends EntityDetailComponent implements OnInit {
  private character: CharacterModel;
  private characterId: number;
  private relatedMovies: MovieModel[] = [];
  private homeworld: PlanetModel = null;

  constructor(injector: Injector, 
    private characterService: CharacterService,
    private planetService: PlanetService) { 
    
    super(injector);
  }

  ngOnInit() {
    super.loadFromCacheOrRequestEntity(this.characterService, EntityEnum.CHARACTER, this.fill.bind(this));
  }

  fill(info: EntityInfo, subscription: Subscription) {
    this.character = info.entity;
    this.characterId = info.id;
    this.relatedMovies = info.relatedMovies;

    if( subscription ) {
      subscription.unsubscribe();
    }

    // this.updateHomeworld(this.character.homeworld);
  }

  toRoman(num: number){
    return this.utilService.toRoman(num);
  } 
  
  updateHomeworld(url: string) {
    this.planetService
      .requestByUrl(url)
      .subscribe(homeworld => this.homeworld = homeworld);
  }
}
