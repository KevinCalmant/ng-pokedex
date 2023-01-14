import { Region, RegionInfo } from '../model/region.model';

export const regionDatas: Record<Region, RegionInfo> = {
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
