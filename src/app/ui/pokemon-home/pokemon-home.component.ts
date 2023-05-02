import { Component, OnInit } from '@angular/core';
import { PokeapiService } from 'src/app/business/service/pokeapi.service';
import {
  PokemonDetailConstructor,
  PokemonDetailModel,
} from 'src/app/datastore/entities/pokemon-detail.model';
import { ActivatedRoute } from '@angular/router';
import { PokemonListConstructor } from 'src/app/datastore/entities/pokemon-list.model';

@Component({
  selector: 'app-pokemon-home',
  templateUrl: './pokemon-home.component.html',
  styleUrls: ['./pokemon-home.component.css'],
})
export class PokemonHomeComponent implements OnInit {
  public pokemonlist: PokemonDetailModel[] = [];
  public hidebutton: boolean = false;

  constructor(
    private pokeapiService: PokeapiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getPokemons();
  }
  getPokemons() {
    this.pokemonlist = [];
    this.hidebutton = !this.pokeapiService.OffSetController();
    this.pokeapiService.getPokemonApiList().subscribe((res) => {
      let risposta = res as unknown as PokemonListConstructor;
      for (const name of risposta.results) {
        this.pokeapiService.getPokemonApi(name.name).subscribe((res) => {
          this.pokemonlist.push(res);
        });
      }
    });
  }
  increasePokemon() {
    this.pokeapiService.nextPokemon();
    this.getPokemons();
  }
  decreasePokemon() {
    this.pokeapiService.previousPokemon();
    this.getPokemons();
  }
}
