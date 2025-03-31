import {RecipeExecutor} from "./RecipeExecutor.ts";
import {RecipeRegistry} from "./RecipeRegistry.ts";
import {RecipeType} from "../interface/IRecipe.ts";
import {DistillerType} from "../../distiller/interface/IDistiller.ts";
import {Moonshine} from "../../moonshine/class/Moonshine.ts";
import {MoonshineFlavor} from "../../moonshine/interface/IMoonshine.ts";

describe('RecipeExecutor', () => {
  test('vintageRecipe', () => {
    const recipe = RecipeRegistry.getRecipe(RecipeType.FRUITY, DistillerType.VINTAGE);
    const result = RecipeExecutor.execute(recipe);
    expect(result).toEqual(new Moonshine(71, 24, 68, MoonshineFlavor.FRUITY))
  });
  test('modernRecipe', () => {
    const recipe = RecipeRegistry.getRecipe(RecipeType.STRONG, DistillerType.MODERN);
    const result = RecipeExecutor.execute(recipe);
    expect(result).toEqual(new Moonshine(96, 19, 85.5, MoonshineFlavor.STRONG))
  });
  test('studentRecipe', () => {
    const recipe = RecipeRegistry.getRecipe(RecipeType.SMOOTH, DistillerType.STUDENTS);
    const result = RecipeExecutor.execute(recipe);
    expect(result).toEqual(new Moonshine(14, 12, 34, MoonshineFlavor.SMOOTH))
  });
});
