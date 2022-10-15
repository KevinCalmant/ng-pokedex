import { Region } from 'src/app/shared/model/region.model';

export class SetRegion {
  static readonly type = '[App] Set Region';
  constructor(public readonly payload: Region) {}
}
