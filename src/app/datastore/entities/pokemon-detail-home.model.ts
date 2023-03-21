export interface PokemonDetailHomeConstructor {
    sprites: {other: {front_default: string}};
}

export class PokemonDetailHome {
    public sprite: string;

    constructor(dataPoke: PokemonDetailHomeConstructor) {
        this.sprite = dataPoke['sprites']['other']['front_default'];
    }
}
