import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedexListComponent } from './pages/pokedex-list/pokedex-list.component';
import { PokedexDetailtComponent } from './pages/pokedex-detailt/pokedex-detailt.component';
import { PokedexRoutingModule } from './pokedex-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [PokedexListComponent, PokedexDetailtComponent],
  imports: [CommonModule, PokedexRoutingModule, HttpClientModule],
})
export class PokedexModule {}
