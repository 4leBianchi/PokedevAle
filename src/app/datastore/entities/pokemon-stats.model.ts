export interface PokemonStatConstructor {
  base_stat: number;
  effort: number;
  stat: { name: string };
}

export class PokemonStatModel {
  hp!: number;
  attack!: number;
  defense!: number;
  'special-attack'!: number;
  'special-defense'!: number;
  speed!: number;

  constructor() {
    this.hp = 0;
    this.attack = 0;
    this.defense = 0;
    this['special-attack'] = 0;
    this['special-defense'] = 0;
    this.speed = 0;
  }
}
