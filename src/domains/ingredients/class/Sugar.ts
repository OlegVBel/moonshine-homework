import {AbstractIngredient} from "./AbstractIngredient.ts";
import {IngredientName} from "../interface/IIngredient.ts";

export class Sugar extends AbstractIngredient {
  constructor(quality, quantity) {
    super(IngredientName.Sugar, quality, quantity);
  }

  doPrepare() {
    console.log("Dissolving sugar...");
  }

  use() {
    console.log("Adding sugar...");
  }
}
