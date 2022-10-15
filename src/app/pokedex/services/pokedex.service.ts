import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PokeApiResponse } from '../model/poke-api-response.model';
import { Pokemon } from '../model/pokemon.model';
import { Region } from '../../shared/model/region.model';
import { regionDatas } from 'src/app/shared/utils/region-data';
@Injectable({
  providedIn: 'root',
})
export class PokedexService {
  constructor(private readonly httpClient: HttpClient) {}

  getPokemons(region: Region): Observable<PokeApiResponse<Pokemon>> {
    const regionData = regionDatas[region];
    const params = new HttpParams()
      .append('offset', regionData.firstPokemonNum)
      .append('limit', regionData.numberOfPokemon);
    return this.httpClient.get<PokeApiResponse<Pokemon>>(`${environment.baseUrl}/pokemon/`, { params });
  }

  getPokemon(url: string): Observable<Pokemon> {
    return this.httpClient.get<Pokemon>(url);
  }
}
