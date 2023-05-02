//import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PokeapiService } from 'src/app/business/service/pokeapi.service';
import {
  PokemonDetailConstructor,
  PokemonDetailModel,
} from 'src/app/datastore/entities/pokemon-detail.model';
import { ActivatedRoute } from '@angular/router';
import { merge, mergeMap, zip } from 'rxjs';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css'],
})
export class PokemonDetailComponent implements OnInit {
  public pokemon: PokemonDetailModel | null = null;

  constructor(
    private pokeapiService: PokeapiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('namePokemon')?.toLocaleLowerCase() || '';

    const pokeDetail = this.pokeapiService.getPokemonApi(name);
    const pokeEntry = this.pokeapiService.getPokemonEntry(name);

    zip(pokeDetail, pokeEntry).subscribe(
      ([pokemonDetailModel, pokemonEntryModel]) => {
        this.pokemon = pokemonDetailModel;
        this.pokemon.pokedex = pokemonEntryModel.pokedex;
      }
    );
  }
}
