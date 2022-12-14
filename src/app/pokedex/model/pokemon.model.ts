import { PokemonSprites } from './pokemon-sprites.model';
import { PokemonType } from './pokemon-type.model';

export interface Pokemon {
  id: number;
  name: string;
  url: string;
  sprites: PokemonSprites;
  types: PokemonType[];
}
