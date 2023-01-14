import { AfterViewInit, ChangeDetectionStrategy, Component } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Pokemon } from '../../model/pokemon.model';
import { PokedexService } from '../../services/pokedex.service';
import {AsyncPipe, NgFor} from "@angular/common";
import {RegionNavigatorComponent} from "../../components/region-navigator/region-navigator.component";
import {PokedexCardComponent} from "../../components/pokedex-card/pokedex-card.component";

@Component({
  selector: 'app-pokedex-list',
  templateUrl: './pokedex-list.component.html',
  styleUrls: ['./pokedex-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgFor,
    AsyncPipe,
    RegionNavigatorComponent,
    PokedexCardComponent
  ]
})
export class PokedexListComponent {
  readonly pokemonResponse$ = this.pokedexService.pokemons$;

  constructor(private readonly pokedexService: PokedexService) {}

  trackByName(index: number, pokemon: Pokemon) {
    return index + pokemon.name;
  }
}
