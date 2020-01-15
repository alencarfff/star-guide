import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { PaginatorModule } from '../shared/components/paginator/paginator.module';
import { CardModule } from '../shared/components/cards/card/card.module';
import { CardListModule } from '../shared/components/cards/card-list/card-list.module';
import { SearchModule } from '../shared/components/search/search.module';

@NgModule({
  declarations: [
    CharacterDetailComponent,
    CharacterListComponent,
  ],
  imports: [
    CommonModule,
    PaginatorModule,
    CardModule,
    CardListModule,
    SearchModule
  ]
})
export class CharactersModule { }
