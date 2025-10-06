import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CharacterCard } from '@Components/character-card/character-card';
import { ListMessage } from '@Components/list-message/list-message';
import { Loading } from '@Components/loading/loading';
import { PageTitle } from '@Components/page-title/page-title';
import { RouterButton } from '@Components/router-button/router-button';
import { SearchInput } from '@Components/search-input/search-input';
import { Character } from '@Models/characters.interface';
import { FavoriteCharactersQuery, FavoriteCharactersService } from '@State/favorite-characters';
import { combineLatest, debounceTime, distinctUntilChanged, map, startWith } from 'rxjs';


@Component({
  selector: 'app-favorite-characters-page',
  imports: [
    PageTitle,
    SearchInput,
    ReactiveFormsModule,
    AsyncPipe,
    CharacterCard,
    Loading,
    ListMessage,
    RouterButton
  ],
  templateUrl: './favorite-characters-page.html',
  styleUrl: './favorite-characters-page.scss'
})
export class FavoriteCharactersPage {
  private formBuilderService = inject(FormBuilder);

  private favoritesQuery = inject(FavoriteCharactersQuery);
  private favoritesService = inject(FavoriteCharactersService);

  form = this.formBuilderService.nonNullable.group({
    name: ['']
  })

  favorites$ = this.favoritesQuery.all$;

  filter$ = this.form.controls.name.valueChanges.pipe(
    startWith(this.form.controls.name.value),
    debounceTime(300),
    distinctUntilChanged(),
    map(v => v.trim().toLowerCase())
  );

  characters$ = combineLatest([this.favorites$, this.filter$]).pipe(
    map(([list, q]) => q ? list.filter(c => c.name.toLowerCase().includes(q)) : list)
  );

  toggleFavorite(c: Character) {
    this.favoritesService.toggle(c);
  }
}
