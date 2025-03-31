import {IIngredient, IngredientName} from "../../ingredients/interface/IIngredient.ts";
import {FlavorClassifier} from "./FlavorClassifier.ts";
import {MoonshineFlavor} from "../interface/IMoonshine.ts";

function mockIngredient(name: IngredientName, quality: number): IIngredient {
  return {
    name,
    quality,
    quantity: 1,
    isPrepared: true,
    prepare: jest.fn(),
    use: jest.fn(),
  };
}

describe('FlavorClassifier', () => {
  test('AWFUL', () => {
    const ingredients = [mockIngredient(IngredientName.Water, 10)];
    const flavor = FlavorClassifier.classify({ ingredients, quality: 10, abv: 20 });
    expect(flavor).toBe(MoonshineFlavor.AWFUL);
  });
  test('FRUITY', () => {
    const ingredients = [mockIngredient(IngredientName.Fruit, 80)];
    const flavor = FlavorClassifier.classify({ ingredients, quality: 80, abv: 40 });
    expect(flavor).toBe(MoonshineFlavor.FRUITY);
  });
  test('SWEET', () => {
    const ingredients = [mockIngredient(IngredientName.Sugar, 85)];
    const flavor = FlavorClassifier.classify({ ingredients, quality: 85, abv: 50 });
    expect(flavor).toBe(MoonshineFlavor.SWEET);
  });
  test('STRONG', () => {
    const ingredients = [mockIngredient(IngredientName.Water, 90)];
    const flavor = FlavorClassifier.classify({ ingredients, quality: 90, abv: 80 });
    expect(flavor).toBe(MoonshineFlavor.STRONG);
  });
  test('SMOOTH', () => {
    const ingredients = [mockIngredient(IngredientName.Water, 75)];
    const flavor = FlavorClassifier.classify({ ingredients, quality: 75, abv: 20 });
    expect(flavor).toBe(MoonshineFlavor.SMOOTH);
  });
});
