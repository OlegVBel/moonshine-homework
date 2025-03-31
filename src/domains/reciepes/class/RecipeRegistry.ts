import {IRecipe, RecipeType} from "../interface/IRecipe.ts";
import {DistillerType} from "../../distiller/interface/IDistiller.ts";
import {modernRecipes, studentRecipes, vintageRecipes} from "../constants.ts";
import {Recipe} from "./Recipe.ts";

export class RecipeRegistry {
  private static readonly _recipes: IRecipe[] = [
    ...vintageRecipes,
    ...modernRecipes,
    ...studentRecipes,
  ];

  static getRecipe(type: RecipeType, distillerType: DistillerType): Recipe {
    const recipeInstructions = this._recipes.find((recipe) => recipe.type === type && recipe.distillerType === distillerType);
    if (!recipeInstructions) {
      throw new Error(`Recipe not found for type: ${type} and distillerType: ${distillerType}`);
    }
    return new Recipe(recipeInstructions);
  }
}
