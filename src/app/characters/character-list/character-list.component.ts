import { Component, OnInit, Input } from '@angular/core';
import { CharacterService } from 'src/app/core/services/character.service';

@Component({
  selector: 'sw-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {
  @Input() movieCharacters;

  constructor(private characterService: CharacterService) {}

  ngOnInit() {
    this.characterService.requestCharacters().subscribe(characters => {
      
    });
  }
}
