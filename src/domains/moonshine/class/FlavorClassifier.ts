import {IIngredient, IngredientName} from "../../ingredients/interface/IIngredient.ts";
import {MoonshineFlavor} from "../interface/IMoonshine.ts";

export class FlavorClassifier {
  static classify({ ingredients, quality, abv }: {
    ingredients: IIngredient[],
    quality: number,
    abv: number
  }): MoonshineFlavor {
    const names = ingredients.map(i => i.name);
    const hasFruit = names.includes(IngredientName.Fruit);
    const hasSugar = names.includes(IngredientName.Sugar);

    if (quality <= 30 || abv <= 10) {
      return MoonshineFlavor.AWFUL;
    }
    if (hasFruit && quality > 50 && abv >= 30) {
      return MoonshineFlavor.FRUITY;
    }
    if (hasSugar && quality > 50 && abv >= 30) {
      return MoonshineFlavor.SWEET;
    }
    if (abv > 50) {
      return MoonshineFlavor.STRONG;
    }
    return MoonshineFlavor.SMOOTH;
  }
}
