import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { first, Observable, of } from 'rxjs';
import { Pokemon } from '../../model/pokemon.model';
import { PokedexService } from '../../services/pokedex.service';

@Component({
  selector: 'app-pokedex-card',
  templateUrl: './pokedex-card.component.html',
  styleUrls: ['./pokedex-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokedexCardComponent implements OnInit {
  @Input() url: string = '';

  pokemon$: Observable<Pokemon | null> = of(null);

  constructor(private readonly pokedexService: PokedexService) {}

  ngOnInit(): void {
    this.pokemon$ = this.pokedexService.getPokemon(this.url).pipe(first());
  }
}
