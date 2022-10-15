import { PokeApiResponse } from '../model/poke-api-response.model';
import { Pokemon } from '../model/pokemon.model';

export class SetPokemons {
  static readonly type = '[Pokedex] Set Pokemons';
  constructor(public readonly payload: PokeApiResponse<Pokemon>) {}
}
