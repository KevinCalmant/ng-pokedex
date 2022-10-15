import { PokeApiResponse } from '../model/poke-api-response.model';
import { Pokemon } from '../model/pokemon.model';

export interface PokedexStateModel {
  pokemons: PokeApiResponse<Pokemon> | undefined;
}
