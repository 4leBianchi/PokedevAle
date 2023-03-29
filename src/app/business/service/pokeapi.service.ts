import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { PokemonDetailConstructor, PokemonDetailModel } from 'src/app/datastore/entities/pokemon-detail.model';
import { PokemonListConstructor } from 'src/app/datastore/entities/pokemon-list.model';
import { PokemonEntryConstructor, PokemonEntryModel } from 'src/app/datastore/entities/pokemon-entry.model';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  constructor(private httpClient: HttpClient) { }

  getPokemonApi(name:String){
    return this.httpClient.get('https://pokeapi.co/api/v2/pokemon/'+name).pipe(
      map((res)=>{
        return new PokemonDetailModel(res as PokemonDetailConstructor);
      })
    );
  }

  getPokemonEntry(name:String){
    return this.httpClient.get('https://pokeapi.co/api/v2/pokemon-species/'+name).pipe(
      map((res)=>{
        return new PokemonEntryModel(res as PokemonEntryConstructor);
      })
    );
  };

  getPokemonApiList(){
    return this.httpClient.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=9");
  }
}
