export interface RegionInfo {
  firstPokemonNum: number;
  numberOfPokemon: number;
  profName: string;
}

export type Region =
  | 'kanto'
  | 'johto'
  | 'hoenn'
  | 'sinnoh'
  | 'unova'
  | 'kalos'
  | 'alola'
  | 'galar';
