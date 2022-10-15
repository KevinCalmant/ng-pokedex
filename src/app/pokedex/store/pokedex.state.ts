import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { PokedexStateModel } from './pokedex-state.model';
import { SetPokemons } from './pokedex.actions';

@State<PokedexStateModel>({
  name: 'pokedex',
  defaults: {
    pokemons: undefined,
  },
})
@Injectable()
export class PokedexState {
  @Action(SetPokemons)
  setPokemons(ctx: StateContext<PokedexStateModel>, action: SetPokemons) {
    ctx.setState({
      ...ctx.getState(),
      pokemons: action.payload,
    });
  }
}
