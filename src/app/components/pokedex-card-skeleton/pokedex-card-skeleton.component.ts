import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-pokedex-card-skeleton',
  templateUrl: './pokedex-card-skeleton.component.html',
  styleUrls: ['./pokedex-card-skeleton.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class PokedexCardSkeletonComponent {}
