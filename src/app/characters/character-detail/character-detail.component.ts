import { Component, OnInit } from '@angular/core';
import MovieModel from 'src/app/core/models/movie.model';
import CharacterModel from 'src/app/core/models/character.model';
import MovieService from 'src/app/core/services/movie.service';
import { UtilService } from 'src/app/core/util.service';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from 'src/app/core/services/character.service';
import { EntityEnum } from 'src/app/core/models/entity.enum';
import { PlanetService } from 'src/app/core/services/planet.service';
import PlanetModel from 'src/app/core/models/planet.model';

@Component({
  selector: 'sw-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {
  private character: CharacterModel;
  private characterId: number;
  private relatedMovies: MovieModel[] = [];
  private homeworld: PlanetModel = null;

  constructor(private movieService: MovieService,
              private characterService: CharacterService,
              private utilService: UtilService,
              private planetService: PlanetService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const character = this.characterService.character || null;
    
    if( character ) {
      this.character = character;
      this.characterId = this.utilService.getEntityId(character.url);
      this.relatedMovies = this.utilService.getEntityRelatedMovies(this.movieService, character);        
    }
    else {
      this.request();
    }
  }

  toRoman = (num: number) => this.utilService.toRoman(num);

  request(){
    const id = +this.activatedRoute.snapshot.params['id']
    this.characterService
      .requestById(id, EntityEnum.CHARACTER)
      .subscribe(character => {
        this.character = character;
        this.characterId = this.utilService.getEntityId(character.url);
        this.updateHomeworld(character.homeworld);
        this.relatedMovies = this.utilService.getEntityRelatedMovies(this.movieService, character);        
      });
  }

  updateHomeworld(url: string) {
    this.planetService
      .requestByUrl(url)
      .subscribe(homeworld => this.homeworld = homeworld);
  }
}
