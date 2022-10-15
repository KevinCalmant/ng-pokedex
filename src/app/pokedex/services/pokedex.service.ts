import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PokeApiResponse } from '../model/poke-api-response.model';
import { Pokemon } from '../model/pokemon.model';
import { Region, RegionInfo } from '../model/region.model';

const regionDatas: Record<Region, RegionInfo> = {
  ['kanto']: {
    firstPokemonNum: 0,
    numberOfPokemon: 151,
    profName: 'Oak',
  },
  ['johto']: {
    firstPokemonNum: 151,
    numberOfPokemon: 100,
    profName: 'Elm',
  },
  ['hoenn']: {
    firstPokemonNum: 251,
    numberOfPokemon: 135,
    profName: 'Birch',
  },
  ['sinnoh']: {
    firstPokemonNum: 386,
    numberOfPokemon: 108,
    profName: 'Rowan',
  },
  ['unova']: {
    firstPokemonNum: 494,
    numberOfPokemon: 155,
    profName: 'Juniper',
  },
  ['kalos']: {
    firstPokemonNum: 649,
    numberOfPokemon: 72,
    profName: 'Sycamore',
  },
  ['alola']: {
    firstPokemonNum: 721,
    numberOfPokemon: 88,
    profName: 'Kukui',
  },
  ['galar']: {
    firstPokemonNum: 809,
    numberOfPokemon: 81,
    profName: 'Magnolia',
  },
};

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
    return this.httpClient.get<PokeApiResponse<Pokemon>>(
      `${environment.baseUrl}/pokemon/`,
      { params }
    );
  }
}
