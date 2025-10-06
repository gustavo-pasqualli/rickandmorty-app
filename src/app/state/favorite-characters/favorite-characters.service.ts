import { inject, Injectable } from '@angular/core';
import { FavoriteCharactersStore } from './favorite-characters.store';
import { FavoriteCharactersQuery } from './favorite-characters.query';
import { Character } from '@Models/characters.interface';

@Injectable({ providedIn: 'root' })
export class FavoriteCharactersService {
  private store = inject(FavoriteCharactersStore);
  private query = inject(FavoriteCharactersQuery);

  add(c: Character) {
    this.store.upsert(c.id, c);
  }

  remove(id: number) {
    this.store.remove(id);
  }

  clear() {
    this.store.set([]);
  }

  toggle(c: Character) {
    this.query.has(c.id) ? this.remove(c.id) : this.add(c);
  }
}
