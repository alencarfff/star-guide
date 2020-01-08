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
export class CharacterListComponent implements OnInit {
  private characters: CharacterModel[] = [];
  private pageable: any = {
    page: 1,
    next: null,
    previous: null
  }

  constructor(private utilService: UtilService,
              private characterService: CharacterService) {}

  private readonly assetsPath: string = "/src/assets/img/movies";

  ngOnInit() {
    this.request();
  }

  request(){
    this.characterService.requestCharactersPage(this.pageable.page).subscribe(response => {
      this.characters = response.results;
      this.pageable.next = response.next;
      this.pageable.previous = response.previous;      
    });
  }

  nextPage(){
    if( this.pageable.next ){
      this.pageable.page++;
      this.request();
    }
  }

  previousPage(){
    if( this.pageable.previous ){
      this.pageable.page--;
      this.request();
    }
  }

  getCharacterImage(character: CharacterModel){
    return `${this.assetsPath}/characters/${this.getCharacterId(character.url)}`;
  }

  getCharacterId(url: string) : number {
    return 0;
  }
}
