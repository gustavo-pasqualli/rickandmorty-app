import { Component, inject } from '@angular/core';
import { PageTitle } from '../../../shared/components/page-title/page-title';
import { SearchInput } from '../../../shared/components/search-input/search-input';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, map, Observable, switchMap } from 'rxjs';
import { Character } from '../../../shared/models/characters.interface';
import { CharacterService } from '../../../core/services/character.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-favorite-characters-page',
  imports: [
    PageTitle,
    SearchInput,
    ReactiveFormsModule,
    AsyncPipe
  ],
  templateUrl: './favorite-characters-page.html',
  styleUrl: './favorite-characters-page.scss'
})
export class FavoriteCharactersPage {
  private characterService = inject(CharacterService);
  private formBuilderService = inject(FormBuilder);

  form = this.formBuilderService.nonNullable.group({
    name: ['']
  })

  characters$!: Observable<Character[]>;

  ngOnInit(): void {
    this.searchCharacters();
  }

  searchCharacters() {
    const formValue = this.form.value;

    this.characters$ = this.form.controls.name.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      filter((text) => text.length > 1),
      switchMap(() => this.characterService.getCharacters(formValue)),
      map(res => res.results),
    )
  }
}
