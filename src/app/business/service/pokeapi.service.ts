import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  constructor(private httpClient: HttpClient) { }

  getPokemonApi(name:String){
    return this.httpClient.get('https://pokeapi.co/api/v2/pokemon/'+name);
  }

  getPokemonApiList(){
    return this.httpClient.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=7");
  }
}
