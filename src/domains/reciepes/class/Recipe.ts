import {IRecipe, RecipeType} from "../interface/IRecipe.ts";
import {DistillerType, IDistiller} from "../../distiller/interface/IDistiller.ts";
import {IHeater} from "../../heating/interface/IHeater.ts";
import {IIngredient} from "../../ingredients/interface/IIngredient.ts";
import {DistillerFactory} from "../../distiller/class/DistillerFactory.ts";

export class Recipe implements IRecipe {
  readonly type: RecipeType;
  readonly distillerType: DistillerType;
  readonly heater: IHeater;
  readonly ingredients: IIngredient[];
  readonly isPrepareIngredients: boolean;
  readonly prepareTimes: number;

  constructor(props: IRecipe) {
    this.type = props.type;
    this.distillerType = props.distillerType;
    this.heater = props.heater;
    this.ingredients = props.ingredients;
    this.isPrepareIngredients = props.isPrepareIngredients;
    this.prepareTimes = props.prepareTimes;
  }

  get distiller(): IDistiller {
    return DistillerFactory.create(this.distillerType, this.heater);
  }
}
