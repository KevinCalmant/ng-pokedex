import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedexListComponent } from './pages/pokedex-list/pokedex-list.component';
import { PokedexDetailtComponent } from './pages/pokedex-detailt/pokedex-detailt.component';
import { PokedexRoutingModule } from './pokedex-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { NgxsModule } from '@ngxs/store';
import { PokedexState } from './store/pokedex.state';
import { PokedexCardComponent } from './components/pokedex-card/pokedex-card.component';
import { PokedexCardSkeletonComponent } from './components/pokedex-card-skeleton/pokedex-card-skeleton.component';

@NgModule({
  declarations: [PokedexListComponent, PokedexDetailtComponent, PokedexCardComponent, PokedexCardSkeletonComponent],
  imports: [CommonModule, PokedexRoutingModule, HttpClientModule, SharedModule, NgxsModule.forFeature([PokedexState])],
})
export class PokedexModule {}
