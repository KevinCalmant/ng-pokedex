import { Component } from '@angular/core';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  loading$ = this.store.select(state => state?.pokedex?.pokemons == null);

  constructor(private readonly store: Store) {}
}
