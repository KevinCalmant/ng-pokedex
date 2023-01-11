import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {CommonModule, NgClass, NgIf} from "@angular/common";

@Component({
  selector: 'app-poke-type',
  templateUrl: './poke-type.component.html',
  styleUrls: ['./poke-type.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NgClass,
    NgIf,
  ],
  standalone: true,
})
export class PokeTypeComponent {
  @Input() type: string | undefined;
}
