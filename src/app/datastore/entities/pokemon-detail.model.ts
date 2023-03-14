import { PokemonTypeConstructor, PokemonTypeModel } from "./pokemon-type.model";

export interface PokemonDetailConstructor {
  id: number;
  height: number;
  weight: number;
  order: number;
  types: PokemonTypes[];
}

interface PokemonTypes {
    type: PokemonTypeConstructor;
}

export class PokemonDetailModel {
  public id: number;
  public height: number;
  public weight: number;
  public order: number;
  public types: PokemonTypeModel[]=[];

  constructor(dataPoke: PokemonDetailConstructor) {
    this.id = dataPoke['id'];
    this.height = dataPoke['height'];
    this.weight = dataPoke['weight'];
    this.order = dataPoke['order'];

    for (const type of dataPoke.types) {
        this.types.push(new PokemonTypeModel(type.type))
    }
  }
}
