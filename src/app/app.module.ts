import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonDetailComponent } from './ui/pokemon-detail/pokemon-detail.component';
import { NavHeaderComponent } from './ui/nav-header/nav-header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PokemonHomeComponent } from './ui/pokemon-home/pokemon-home.component';
import { PokemonRowComponent } from './ui/pokemon-row/pokemon-row.component';
import { MetricPipe } from './business/pipe/metric.pipe';
import { WeightPipe } from './business/pipe/mass.pipe';
import { FeetsInchesPipe } from './business/pipe/feets-inches.pipe';
import { LbsPipe } from './business/pipe/lbs.pipe';
import { PokemonHeaderRowComponent } from './ui/pokemon-header-row/pokemon-header-row.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonDetailComponent,
    NavHeaderComponent,
    PokemonHomeComponent,
    PokemonRowComponent,
    MetricPipe,
    WeightPipe,
    FeetsInchesPipe,
    LbsPipe,
    PokemonHeaderRowComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
