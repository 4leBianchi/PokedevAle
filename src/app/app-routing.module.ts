import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonDetailComponent } from './ui/pokemon-detail/pokemon-detail.component';
import { PokemonHomeComponent } from './ui/pokemon-home/pokemon-home.component';
import { NavHeaderComponent } from './ui/nav-header/nav-header.component';

const routes: Routes = [
  { path: 'dettaglio/:namePokemon', component: PokemonDetailComponent },
  { path: '', redirectTo: 'pokeHome', pathMatch: 'full' },
  { path: 'pokeHome', component: PokemonHomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
