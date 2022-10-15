import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-poke-type',
  templateUrl: './poke-type.component.html',
  styleUrls: ['./poke-type.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokeTypeComponent {
  @Input() type: string | undefined;
}
