import {Moonshine} from "../../moonshine/class/Moonshine.ts";
import {Recipe} from "./Recipe.ts";

export class RecipeExecutor {
  static execute(recipe: Recipe): Moonshine {
    const distiller = recipe.distiller;
    distiller.load(recipe.ingredients);
    if (recipe.isPrepareIngredients && recipe.prepareTimes > 0) {
      for (let i = 0; i < recipe.prepareTimes; i++) {
        distiller.prepare();
      }
    }
    return distiller.distill();
  }
}
