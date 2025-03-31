export enum IngredientName {
  Fruit = "Fruit",
  Sugar = "Sugar",
  Water = "Water",
  Yeast = "Yeast",
}

export interface IIngredient {
  name: IngredientName; // name of the ingredient
  quality: number; // 0-100, used to calculate the quality of the product
  quantity: number; // kg
  isPrepared: boolean; // is the ingredient prepared? If don't prepare some ingredients, the quality will be lower

  prepare(): void; // preparing ingredients takes time but can grow up quality
  use(): void; // using ingredients to make a product. If the ingredient is not prepared, the quality will decrease
}
