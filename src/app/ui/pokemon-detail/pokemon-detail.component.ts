//import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PokeapiService } from 'src/app/business/service/pokeapi.service';
import { PokemonDetailConstructor, PokemonDetailModel } from 'src/app/datastore/entities/pokemon-detail.model';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit{
  public pokemon: PokemonDetailModel |null = null;

  constructor (private pokeapiService: PokeapiService) {};

  ngOnInit(): void {
    this.pokeapiService.getPokemonApi("pikachu").subscribe(res=>{
      this.pokemon=new PokemonDetailModel(res as PokemonDetailConstructor);
      console.log(this.pokemon)
    });
  }
}
