import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { CharacterService } from 'src/app/core/services/character.service';
import { UtilService } from 'src/app/core/util.service';
import CharacterModel from 'src/app/core/models/character.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'sw-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit, OnDestroy {
  @Input() characterUrls: string[];
  @Input() movieId;
  private characters: CharacterModel[] = [];
  private subscriptions: Subscription[] = [];

  constructor(private characterService: CharacterService,
              private utilService: UtilService) {}

  private readonly moviesAssetsPath: string = "/src/assets/img/movies";

  ngOnInit() {
    this.characterUrls.forEach(characterUrl => {
      this.subscriptions.push(
        this.characterService.requestCharacterByUrl(characterUrl).subscribe(character => {
          this.characters.push(character);
        })
      );
    });
  }

  toRoman(num: number){
    return this.utilService.toRoman(num);
  }

  getCharacterImage(character: CharacterModel){
    return `${this.moviesAssetsPath}/${this.toRoman(this.movieId)}/characters/${this.getCharacterId(character.url)}`;
  }

  getCharacterId(url: string){
    return 0;
  }

  ngOnDestroy(){
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    });
  }
}
