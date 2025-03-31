import {IngredientName} from "../interface/IIngredient.ts";
import {AbstractIngredient} from "./AbstractIngredient.ts";

export class Fruit extends AbstractIngredient {
  constructor(quality, quantity) {
    super(IngredientName.Fruit, quality, quantity);
  }

  doPrepare() {
    console.log("Crushing fruit...");
  }

  use() {
    console.log("Adding fruit...");
    if (!this.isPrepared) {
      this.quality -= 20;
    }
  }
}
