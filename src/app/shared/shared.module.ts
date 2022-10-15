import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegionNavigatorComponent } from './components/region-navigator/region-navigator.component';
import { PokeWaitComponent } from './components/poke-wait/poke-wait.component';
import { PokeTypeComponent } from './components/poke-type/poke-type.component';

@NgModule({
  declarations: [RegionNavigatorComponent, PokeWaitComponent, PokeTypeComponent],
  imports: [CommonModule],
  exports: [RegionNavigatorComponent, PokeWaitComponent, PokeTypeComponent],
})
export class SharedModule {}
