import {AbstractIngredient} from "./AbstractIngredient.ts";
import {IngredientName} from "../interface/IIngredient.ts";

export class Yeast extends AbstractIngredient {
  constructor(quality, quantity) {
    super(IngredientName.Yeast, quality, quantity);
  }

  doPrepare() {
    console.log("Activating yeast...");
  }

  use() {
    console.log("Adding yeast...");
    if (!this.isPrepared) {
      // Yeast is very sensitive to temperature and humidity
      // being prepared is crucial for its quality
      this.quality -= 40;
    }
  }
}
