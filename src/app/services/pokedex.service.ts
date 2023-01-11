import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject, map, Observable, of, switchMap, tap} from 'rxjs';
import {environment} from 'src/environments/environment';
import {PokeApiResponse} from '../model/poke-api-response.model';
import {Pokemon} from '../model/pokemon.model';
import {Region, RegionInfo} from '../model/region.model';
import {regionDatas} from "../utils/region-data";

@Injectable({
  providedIn: 'root',
})
export class PokedexService {
  private readonly _pokemons$ = new BehaviorSubject<PokeApiResponse<Pokemon> | null>(null);
  private readonly _regions$ = new BehaviorSubject<Region>('kanto')
  private readonly _loading$ = new BehaviorSubject(true);

  readonly pokemons$ = this._pokemons$.asObservable();
  readonly loading$ = this._loading$.asObservable();
  readonly currentRegion$ = this._regions$.asObservable();

  constructor(private readonly httpClient: HttpClient) {
  }

  getPokemons(): Observable<void> {
    return this.currentRegion$.pipe(
      map((region: Region) => regionDatas[region]),
      switchMap((region: RegionInfo) => {
        const params = new HttpParams()
          .append('offset', region.firstPokemonNum)
          .append('limit', region.numberOfPokemon);
        return this.httpClient.get<PokeApiResponse<Pokemon>>(`${environment.baseUrl}/pokemon/`, {params})
      }),
      tap((response) => this._pokemons$.next(response)),
      tap(() => this._loading$.next(false)),
      map(() => void 0),
    );
  }

  getPokemon(url: string): Observable<Pokemon> {
    return this.httpClient.get<Pokemon>(url);
  }

  setRegion(region: Region): Observable<void> {
    this._regions$.next(region);
    return this.getPokemons();
  }
}
