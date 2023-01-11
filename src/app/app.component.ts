import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {AsyncPipe, NgIf} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {PokedexService} from "./services/pokedex.service";
import {take} from "rxjs";
import {PokeWaitComponent} from "./components/poke-wait/poke-wait.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    HttpClientModule,
    NgIf,
    RouterOutlet,
    AsyncPipe,
    PokeWaitComponent,
  ],
  standalone: true,
})
export class AppComponent implements OnInit {
  readonly loading$ = this.pokedexService.loading$;

  constructor(private readonly pokedexService: PokedexService) {
  }

  ngOnInit() {
    this.pokedexService.getPokemons().pipe(take(1)).subscribe();
  }
}
