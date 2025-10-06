import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '@Environments/environment';
import { Observable } from 'rxjs';
import { PaginatedApiResponse } from '@Models/paginated.interface';
import { Character } from '@Models/characters.interface';

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
