import {IRecipe, RecipeType} from "./interface/IRecipe.ts";
import {DistillerType} from "../distiller/interface/IDistiller.ts";
import {Water} from "../ingredients/class/Water.ts";
import {Fruit} from "../ingredients/class/Fruit.ts";
import {Yeast} from "../ingredients/class/Yeast.ts";
import {Sugar} from "../ingredients/class/Sugar.ts";
import {WoodHeater} from "../heating/class/WoodHeater.ts";
import {GasHeater} from "../heating/class/GasHeater.ts";
import {ElectricHeater} from "../heating/class/ElectricHeater.ts";

export const vintageRecipes: IRecipe[] = [
  {
    type: RecipeType.FRUITY,
    distillerType: DistillerType.VINTAGE,
    heater: new WoodHeater(100),
    ingredients: [
      new Water(80, 10),
      new Fruit(95, 10),
      new Yeast(70, 10),
    ],
    isPrepareIngredients: true,
    prepareTimes: 1,
  },
];
export const modernRecipes: IRecipe[] = [
  {
    type: RecipeType.STRONG,
    distillerType: DistillerType.MODERN,
    heater: new ElectricHeater(50, 220),
    ingredients: [
      new Water(75, 10),
      new Yeast(95, 10),
    ],
    isPrepareIngredients: true,
    prepareTimes: 2,
  },
];
export const studentRecipes: IRecipe[] = [
  {
    type: RecipeType.SMOOTH,
    distillerType: DistillerType.STUDENTS,
    heater: new GasHeater(50),
    ingredients: [
      new Water(80, 10),
      new Sugar(50, 10),
      new Yeast(80, 10),
    ],
    isPrepareIngredients: false,
    prepareTimes: 0,
  },
];
