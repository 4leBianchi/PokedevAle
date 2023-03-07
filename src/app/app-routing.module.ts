import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonDetailComponent } from './ui/pokemon-detail/pokemon-detail.component';
import { NavHeaderComponent } from './ui/nav-header/nav-header.component';

const routes: Routes = [
  {path: '', component: PokemonDetailComponent},
  {path: '', component: NavHeaderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
