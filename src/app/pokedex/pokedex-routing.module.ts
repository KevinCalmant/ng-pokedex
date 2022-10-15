import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokedexDetailtComponent } from './pages/pokedex-detailt/pokedex-detailt.component';
import { PokedexListComponent } from './pages/pokedex-list/pokedex-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list',
        component: PokedexListComponent,
      },
      {
        path: 'detail',
        component: PokedexDetailtComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokedexRoutingModule {}
