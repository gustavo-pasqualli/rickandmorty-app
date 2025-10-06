import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Character } from '@Models/characters.interface';

export interface FavoriteCharactersState extends EntityState<Character, number> {}

@StoreConfig({ name: 'favorite-characters', idKey: 'id' })
@Injectable({ providedIn: 'root' })
export class FavoriteCharactersStore extends EntityStore<FavoriteCharactersState, Character> {
  constructor() {
    super();
  }
}
