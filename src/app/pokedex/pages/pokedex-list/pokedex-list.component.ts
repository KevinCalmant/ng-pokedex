import { AfterViewInit, ChangeDetectionStrategy, Component } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Store } from '@ngxs/store';
import { BehaviorSubject, distinctUntilChanged, switchMap } from 'rxjs';
import { PokeApiResponse } from '../../model/poke-api-response.model';
import { Pokemon } from '../../model/pokemon.model';
import { PokedexService } from '../../services/pokedex.service';
import { SetPokemons } from '../../store/pokedex.actions';

@UntilDestroy()
@Component({
  selector: 'app-pokedex-list',
  templateUrl: './pokedex-list.component.html',
  styleUrls: ['./pokedex-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokedexListComponent implements AfterViewInit {
  pokemonResponse$ = this.store.select(state => state.pokedex.pokemons);

  constructor(private readonly store: Store, private readonly pokedexService: PokedexService) {}

  ngAfterViewInit(): void {
    this.store
      .select(state => state.app.region)
      .pipe(
        switchMap(region => this.pokedexService.getPokemons(region)),
        untilDestroyed(this)
      )
      .subscribe(pokemons => this.store.dispatch(new SetPokemons(pokemons)));
  }

  trackByName(index: number, pokemon: Pokemon) {
    return index + pokemon.name;
  }
}
