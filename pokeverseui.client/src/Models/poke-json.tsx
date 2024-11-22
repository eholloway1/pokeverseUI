export interface PokeResults {
  results: PokeJson[];
};

export interface PokeJson {
  name: string;
  url: string;
};

export interface PokeDetails {
  sprites: SpriteList;
  moves: MoveList[];
};

export interface SpriteList {
  front_default: string;
};

export interface MoveList {
  move: Move
}

export interface Move {
  name: string
}