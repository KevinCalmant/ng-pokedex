import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-poke-wait',
  templateUrl: './poke-wait.component.html',
  styleUrls: ['./poke-wait.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokeWaitComponent {
  @Input() message: string | undefined;
}
