import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { SetRegion } from 'src/app/store/app/app.actions';
import { Region } from '../../model/region.model';
import { regionDatas } from '../../utils/region-data';

@Component({
  selector: 'app-region-navigator',
  templateUrl: './region-navigator.component.html',
  styleUrls: ['./region-navigator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegionNavigatorComponent {
  readonly currentRegion$ = this.store.select(state => state.app.region);
  readonly regions: string[] = Object.entries(regionDatas).map(([regionName]) => regionName);

  constructor(private readonly store: Store) {}

  onRegionClick(region: string) {
    this.store.dispatch(new SetRegion(region as Region));
  }
}
