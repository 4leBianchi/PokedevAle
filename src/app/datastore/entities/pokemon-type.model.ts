export interface PokemonTypeConstructor {
  name: string;
}

export class PokemonTypeModel {
    name: string;

    constructor(dataPoke: PokemonTypeConstructor){
        this.name = dataPoke['name'];
    }
}
