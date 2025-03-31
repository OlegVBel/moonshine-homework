import {IHeater} from "../../heating/interface/IHeater.ts";
import {IIngredient, IngredientName} from "../../ingredients/interface/IIngredient.ts";
import {MoonshineFlavor} from "../../moonshine/interface/IMoonshine.ts";
import {ModernDistiller} from "./ModernDistiller.ts";

function mockIngredient(name: IngredientName, quality: number, quantity = 1, prepared = true): IIngredient {
  return {
    name,
    quality,
    quantity,
    isPrepared: prepared,
    prepare: jest.fn(() => (prepared = true)),
    use: jest.fn(),
  };
}

class mockDistiller extends ModernDistiller {
  calculateQuantity(): number {
    return super.calculateQuantity();
  }
  calculateQuality(): number {
    return super.calculateQuality();
  }
  hasIngredient(name: string): boolean {
    return super.hasIngredient(name);
  }
  calculateAbv(avgQuality: number): number {
    return super.calculateAbv(avgQuality);
  }
}

describe('ModernDistiller', () => {
  let heaterMock: IHeater;

  beforeEach(() => {
    heaterMock = {
      heat: jest.fn().mockReturnValue(100)
    };
  });

  describe('distill', () => {
    test('base', () => {
      const distiller = new mockDistiller(heaterMock);
      distiller.load([
        mockIngredient(IngredientName.Water, 50, 25),
        mockIngredient(IngredientName.Fruit, 100, 25),
        mockIngredient(IngredientName.Sugar, 50, 25),
      ]);
      const moonshine = distiller.distill();
      expect(moonshine.abv).toBe(63);
      expect(moonshine.quantity).toBe(71.25);
      expect(moonshine.quality).toBe(60.00000000000001);
      expect(moonshine.flavor).toBe(MoonshineFlavor.FRUITY);
    });
    test('no ingredients', () => {
      const distiller = new mockDistiller(heaterMock);
      expect(() => distiller.distill()).toThrowError('No ingredients = no moonshine');
    });
  })
  describe('calculateAbv', () => {
    test('base', () => {
      const distiller = new mockDistiller(heaterMock);
      distiller.load([
        mockIngredient(IngredientName.Water, 50, 25),
        mockIngredient(IngredientName.Fruit, 100, 25),
        mockIngredient(IngredientName.Sugar, 100, 25),
      ]);
      expect(distiller.calculateAbv(distiller.calculateQuality())).toBe(79);
    })
    test('yeast bonus', () => {
      const distiller = new mockDistiller(heaterMock);
      distiller.load([
        mockIngredient(IngredientName.Water, 50, 25),
        mockIngredient(IngredientName.Yeast, 100, 25),
        mockIngredient(IngredientName.Fruit, 100, 25),
        mockIngredient(IngredientName.Sugar, 100, 25),
      ]);
      expect(distiller.calculateAbv(distiller.calculateQuality())).toBe(96);
    })
    test('min abv', () => {
      const distiller = new mockDistiller(heaterMock);
      distiller.load([
        mockIngredient(IngredientName.Water, 0, 25),
        mockIngredient(IngredientName.Yeast, 0, 25),
        mockIngredient(IngredientName.Fruit, 0, 25),
        mockIngredient(IngredientName.Sugar, 0, 25),
      ]);
      expect(distiller.calculateAbv(0)).toBe(30);
    })
    test('max abv', () => {
      const distiller = new mockDistiller(heaterMock);
      distiller.load([
        mockIngredient(IngredientName.Water, 100, 25),
        mockIngredient(IngredientName.Yeast, 100, 25),
        mockIngredient(IngredientName.Fruit, 100, 25),
        mockIngredient(IngredientName.Sugar, 100, 25),
      ]);
      expect(distiller.calculateAbv(100)).toBe(96);
    })
  })
});
