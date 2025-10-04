import { Component, inject } from '@angular/core';
import { PageTitle } from '../../../shared/components/page-title/page-title';
import { SearchInput } from '../../../shared/components/search-input/search-input';
import { CharacterService } from '../../../core/services/character.service';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable, debounceTime, distinctUntilChanged, filter, switchMap, map, catchError, of, startWith } from 'rxjs';
import { Character } from '../../../shared/models/characters.interface';
import { AsyncPipe } from '@angular/common';
import { CharacterCard } from '../../../shared/components/character-card/character-card';

@Component({
  selector: 'app-characters-page',
  imports: [
    PageTitle,
    SearchInput,
    ReactiveFormsModule,
    AsyncPipe,
    CharacterCard
  ],
  templateUrl: './characters-page.html',
  styleUrl: './characters-page.scss'
})
export class CharactersPage {
  private characterService = inject(CharacterService);
  private formBuilderService = inject(FormBuilder);

  form = this.formBuilderService.nonNullable.group({
    name: ['']
  })

  characters$ = this.form.controls.name.valueChanges.pipe(
    startWith(this.form.controls.name.value),
    debounceTime(500),
    distinctUntilChanged(),
    filter(name => name.length === 0 || name.length > 1),
    switchMap((name) => this.searchCharacters(name)),
  )

  searchCharacters(name: string) {
    const formValue = this.form.value;

    const payload = {
      ...formValue
    };

    return this.characterService.getCharacters(payload).pipe(
      map(res => res.results),
      catchError(() => of([]))
    );
  }
}
