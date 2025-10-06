import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CharacterCard } from '@Components/character-card/character-card';
import { ListMessage } from '@Components/list-message/list-message';
import { Loading } from '@Components/loading/loading';
import { PageTitle } from '@Components/page-title/page-title';
import { SearchInput } from '@Components/search-input/search-input';
import { InfiniteScrollDirective } from '@Directives/infinite-scroll.directive';
import { Character } from '@Models/characters.interface';
import { PaginatedApiResponse } from '@Models/paginated.interface';
import { FavoriteCharactersQuery, FavoriteCharactersService } from '@State/favorite-characters';
import {
  catchError,
  combineLatestWith,
  debounceTime,
  distinctUntilChanged,
  exhaustMap,
  filter,
  map,
  of,
  scan,
  shareReplay,
  startWith,
  Subject,
  switchMap,
  tap,
} from 'rxjs';

import { CharacterService } from '../../../core/services/character.service';

@Component({
  selector: 'app-characters-page',
  imports: [
    PageTitle,
    SearchInput,
    ReactiveFormsModule,
    AsyncPipe,
    CharacterCard,
    InfiniteScrollDirective,
    Loading,
    ListMessage
  ],
  templateUrl: './characters-page.html',
  styleUrl: './characters-page.scss'
})
export class CharactersPage {
  private characterService = inject(CharacterService);
  private formBuilderService = inject(FormBuilder);

  private favoritesQuery = inject(FavoriteCharactersQuery);
  private favoritesService = inject(FavoriteCharactersService);

  form = this.formBuilderService.nonNullable.group({
    name: ['']
  })

  page = 1;
  hasNext = true;
  private loadMore$ = new Subject<void>();


  characters$ = this.form.controls.name.valueChanges.pipe(
    startWith(this.form.controls.name.value),
    debounceTime(500),
    map(v => (v ?? '').trim()),
    distinctUntilChanged(),
    filter(name => name.length === 0 || name.length > 1),

    switchMap(() => {
      this.page = 1;
      this.hasNext = true;

      return this.loadMore$.pipe(
        startWith(void 0),

        exhaustMap(() =>
          this.searchCharacters().pipe(
            tap((res: PaginatedApiResponse<Character>) => {
              if(!res.info.next) {
                this.hasNext = false;
              }
              if (this.hasNext) this.page++;
            }),
            map((res: PaginatedApiResponse<Character>) => res.results),
            catchError(() => of([] as Character[]))
          )
        ),

        scan((all, chunk) => all.concat(chunk), [] as Character[])
      );
    }),

    combineLatestWith(this.favoritesQuery.select(s => s.ids as number[])),
    map(([chars, favIds]) => {
      const fav = new Set<number>(favIds);
      return chars.map(c => ({ ...c, isFavorite: fav.has(c.id) }));
    }),
    shareReplay(1)
  );

  searchCharacters() {
    const formValue = this.form.value;

    const payload = {
      ...formValue,
      page: this.page
    };

    return this.characterService.getCharacters(payload);
  }

  loadNext() {
    if (!this.hasNext) return;
    this.loadMore$.next();
  }

  toggleFavorite(c: Character) {
    this.favoritesService.toggle(c);
  }
}
