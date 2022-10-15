import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable, switchMap } from 'rxjs';
import { Region } from 'src/app/shared/model/region.model';
import { PokeApiResponse } from '../model/poke-api-response.model';
import { Pokemon } from '../model/pokemon.model';
import { PokedexService } from '../services/pokedex.service';
import { SetPokemons } from '../store/pokedex.actions';

@Injectable({
  providedIn: 'root',
})
export class PokedexListResolver implements Resolve<PokeApiResponse<Pokemon>> {
  private readonly region$: Observable<Region> = this.store.select(state => state.app.region);

  constructor(private readonly store: Store, private readonly pokedexService: PokedexService) {}

  resolve(): Observable<PokeApiResponse<Pokemon>> {
    return this.region$?.pipe(
      switchMap(region => this.pokedexService.getPokemons(region)),
      switchMap(pokemons => this.store.dispatch(new SetPokemons(pokemons))),
      switchMap(() => this.store.select(state => state.pokedex.pokemons))
    );
  }
}
