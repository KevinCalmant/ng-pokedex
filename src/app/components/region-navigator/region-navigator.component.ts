import { ChangeDetectionStrategy, Component } from '@angular/core';
import {PokedexService} from "../../services/pokedex.service";
import {take} from "rxjs";
import {Region} from "../../model/region.model";
import {AsyncPipe, NgClass, NgFor} from "@angular/common";
import {regionDatas} from "../../utils/region-data";

@Component({
  selector: 'app-region-navigator',
  templateUrl: './region-navigator.component.html',
  styleUrls: ['./region-navigator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    AsyncPipe,
    NgClass,
    NgFor,
  ]
})
export class RegionNavigatorComponent {
  readonly currentRegion$ = this.pokedexService.currentRegion$;

  readonly regions: string[] = Object.entries(regionDatas).map(([regionName]) => regionName);

  constructor(private readonly pokedexService: PokedexService) {}

  onRegionClick(region: string) {
    this.pokedexService.setRegion(region as Region).pipe(take(1)).subscribe();
  }
}
