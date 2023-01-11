import {Routes} from "@angular/router";
import {PokedexListComponent} from "./pages/pokedex-list/pokedex-list.component";

export const APP_ROUTES: Routes = [
  {
    path: 'pokedex',
    children: [
      {
        path: 'list',
        component: PokedexListComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list',
      },
    ]
  },
  {
    path: '',
    redirectTo: 'pokedex',
    pathMatch: 'full',
  },
];
