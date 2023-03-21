import { Component, OnInit } from '@angular/core';
import { PokeapiService } from 'src/app/business/service/pokeapi.service';
import { PokemonDetailConstructor, PokemonDetailModel } from 'src/app/datastore/entities/pokemon-detail.model';
import { PokemonDetailHomeConstructor, PokemonDetailHome } from 'src/app/datastore/entities/pokemon-detail-home.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-home',
  templateUrl: './pokemon-home.component.html',
  styleUrls: ['./pokemon-home.component.css']
})
export class PokemonHomeComponent implements OnInit{
  public pokehome: PokemonDetailModel |null = null;
  public pokemon: PokemonDetailHome |null = null;

  constructor (
    private pokeapiService: PokeapiService,
    private route: ActivatedRoute,
  ){};

  ngOnInit(): void {
    this.pokeapiService.getPokemonApiList().subscribe((risposta)=>{

      console.log(risposta)
    });
  }
}
