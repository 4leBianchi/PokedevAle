export interface PokemonStatConstructor {
    base_stat: number;
    effort: number;
    stat:{name: string};
}

export class PokemonStatModel {
    hp!: number;
    attack!: number;
    defense!: number;
    "special-attack"!: number;
    "special-defense"!: number;
    speed!: number;

    constructor(){
        this.hp = 0 //dataPoke['base_stat']['stat']['name'];
        this.attack = 0 //dataPoke['base_stat']['stat']['name'];
        this.defense = //dataPoke['base_stat']['stat']['name'];
        this["special-attack"] = 0 //dataPoke['base_stat']['stat']['name'];
        this["special-defense"] = 0 //dataPoke['base_stat']['stat']['name'];

    }
}
