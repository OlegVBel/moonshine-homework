import {IIngredient} from "../../ingredients/interface/IIngredient.ts";
import {DistillerType} from "../../distiller/interface/IDistiller.ts";
import {IHeater} from "../../heating/interface/IHeater.ts";

export enum RecipeType {
  FRUITY = "Fruity",
  SWEET = "Sweet",
  STRONG = "Strong",
  SMOOTH = "Smooth",
}

export interface IRecipe {
  type: RecipeType;
  distillerType: DistillerType;
  heater: IHeater;
  ingredients: IIngredient[];
  isPrepareIngredients: boolean;
  prepareTimes: number;
}
