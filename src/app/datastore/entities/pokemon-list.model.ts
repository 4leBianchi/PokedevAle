export interface PokemonListConstructor {
    count: number;
    next: string;
    previous: string;
    results: PokemonListResult[];
}

export interface PokemonListResult{
    name: string;
    url: string
}