import { Component, inject } from '@angular/core';
import { PageTitle } from '../../../shared/components/page-title/page-title';
import { SearchInput } from '../../../shared/components/search-input/search-input';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { combineLatest, debounceTime, distinctUntilChanged, filter, map, Observable, startWith, switchMap } from 'rxjs';
import { Character } from '../../../shared/models/characters.interface';
import { CharacterService } from '../../../core/services/character.service';
import { AsyncPipe } from '@angular/common';
import { FavoriteCharactersQuery, FavoriteCharactersService } from '../../../state/favorite-characters';
import { CharacterCard } from '../../../shared/components/character-card/character-card';
import { ListSkeleton } from "../../../shared/components/list-skeleton/list-skeleton";
import { ListMessage } from '../../../shared/components/list-message/list-message';
import { RouterButton } from '../../../shared/components/router-button/router-button';


@Component({
  selector: 'app-favorite-characters-page',
  imports: [
    PageTitle,
    SearchInput,
    ReactiveFormsModule,
    AsyncPipe,
    CharacterCard,
    ListSkeleton,
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
