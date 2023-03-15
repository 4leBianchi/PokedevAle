import { PokemonStatConstructor, PokemonStatModel} from "./pokemon-stats.model";
import { PokemonTypeConstructor, PokemonTypeModel } from "./pokemon-type.model";

export interface PokemonDetailConstructor {
  id: number;
  sprites: {other: {"official-artwork": {front_default: string}}}; 
  height: number;
  weight: number;
  order: number;
  stats: PokemonStatConstructor[];
  species: {name: string};
  types: PokemonTypes[];
}

interface PokemonTypes {
  type: PokemonTypeConstructor;
}

export class PokemonDetailModel {
  public id: number;
  public image: string;
  public height: number;
  public weight: number;
  public order: number;
  public stats: PokemonStatModel;
  public name: string;
  public types: PokemonTypeModel[]=[];

  constructor(dataPoke: PokemonDetailConstructor) {
    this.id = dataPoke['id'];
    this.image = dataPoke['sprites']['other']["official-artwork"]['front_default'];
    this.height = dataPoke['height'];
    this.weight = dataPoke['weight'];
    this.order = dataPoke['order'];
    this.name = dataPoke['species']['name'];
    this.stats = new PokemonStatModel();

    for (const type of dataPoke.types) {
      this.types.push(new PokemonTypeModel(type.type))
    }

    for (let stat of dataPoke.stats) {
      
      if (stat.stat.name == "hp"){
        this.stats.hp=stat.base_stat;
      }
      if (stat.stat.name == "attack"){
        this.stats.attack=stat.base_stat;
      }
      if (stat.stat.name == "defense"){
        this.stats.defense=stat.base_stat;
      }
      if (stat.stat.name == "special-attack"){
        this.stats["special-attack"]=stat.base_stat;
      }
      if (stat.stat.name == "special-defense"){
        this.stats["special-defense"]=stat.base_stat;
      }
      if (stat.stat.name == "speed"){
        this.stats.speed=stat.base_stat;
      }
    }
  }
}
