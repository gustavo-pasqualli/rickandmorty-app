import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { FavoriteCharactersStore, FavoriteCharactersState } from './favorite-characters.store';
import { Character } from '../../shared/models/characters.interface';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FavoriteCharactersQuery extends QueryEntity<FavoriteCharactersState, Character> {

  ids$!: Observable<number[]>;
  all$!: Observable<Character[]>;
  count$!: Observable<number>;

  constructor(protected override store: FavoriteCharactersStore) {
    super(store);

    this.ids$ = this.select(state => state.ids as number[]);
    this.all$ = this.selectAll();
    this.count$ = this.selectCount();
  }

  has(id: number) { return this.hasEntity(id); }
}
