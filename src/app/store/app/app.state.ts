import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { AppStateModel } from './app-state.model';
import { SetRegion } from './app.actions';

@State<AppStateModel>({
  name: 'app',
  defaults: {
    region: 'kanto',
  },
})
@Injectable()
export class AppState {
  @Action(SetRegion)
  setRegion(ctx: StateContext<AppStateModel>, action: SetRegion) {
    ctx.setState({
      ...ctx.getState(),
      region: action.payload,
    });
  }
}
