export interface PokeJson {
  name: string;
  url: string;
};

export interface PokeResults {
  results: PokeJson[];
};

export interface pokeDetails {
  sprites: SpriteList;
};

export interface SpriteList {
  front_default: string;
};