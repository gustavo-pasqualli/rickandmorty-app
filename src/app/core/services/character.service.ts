import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { PaginatedApiResponse } from '../../shared/models/paginated.interface';
import { Character } from '../../shared/models/characters.interface';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  url = environment.API_URL;

  http = inject(HttpClient);

  getCharacters(params: any): Observable<PaginatedApiResponse<Character>> {
    return this.http.get<PaginatedApiResponse<Character>>(this.url + `character`, {
      params
    });
  }

  getCharacterById(id: number): Observable<Character> {
    return this.http.get<Character>(this.url + `character/${id}`);
  }
}
