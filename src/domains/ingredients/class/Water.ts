import {AbstractIngredient} from "./AbstractIngredient.ts";
import {IngredientName} from "../interface/IIngredient.ts";

export class Water extends AbstractIngredient {
  constructor(quality: number, quantity: number) {
    super(IngredientName.Water, quality, quantity);
  }

  protected doPrepare(): void {
    console.log("Filtering water...");
    this.quality += 10;
  }

  use(): void {
    console.log("Spilling water...");
  }
}
