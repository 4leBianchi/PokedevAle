export interface PokemonEntryConstructor {
  flavor_text_entries: PokemonFlavorTextConstructor[];
}

export interface PokemonFlavorTextConstructor {
  flavor_text: string;
  language: {
    name: string;
    url: string;
  };
}

export class PokemonEntryModel {
  public pokedex: string;

  constructor(dataPoke: PokemonEntryConstructor) {
    this.pokedex = dataPoke['flavor_text_entries'][0]["flavor_text"];
  }
}
