import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { first, Observable, of } from 'rxjs';
import { Pokemon } from '../../model/pokemon.model';
import { PokedexService } from '../../services/pokedex.service';
import {AsyncPipe, NgFor, NgIf, NgOptimizedImage} from "@angular/common";
import {PokeTypeComponent} from "../poke-type/poke-type.component";
import {
  PokedexCardSkeletonComponent
} from "../pokedex-card-skeleton/pokedex-card-skeleton.component";

@Component({
  selector: 'app-pokedex-card',
  templateUrl: './pokedex-card.component.html',
  styleUrls: ['./pokedex-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf,
    NgFor,
    NgOptimizedImage,
    PokeTypeComponent,
    PokedexCardSkeletonComponent,
  ]
})
export class PokedexCardComponent implements OnInit {
  @Input() url: string = '';

  pokemon$: Observable<Pokemon | null> = of(null);

  constructor(private readonly pokedexService: PokedexService) {}

  ngOnInit(): void {
    this.pokemon$ = this.pokedexService.getPokemon(this.url).pipe(first());
  }
}
