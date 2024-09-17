export type GroceryList = {
  [item: string]: number
};

export type InappropriateActionBySituation = {
  [action: string]: string[]
};

export type CharactersById = {
  [index: number]: {
    [property: string]: string | number
  }
};
