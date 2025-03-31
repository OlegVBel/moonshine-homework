import {VintageDistiller} from "./VintageDistiller.ts";
import {IHeater} from "../../heating/interface/IHeater.ts";
import {IIngredient, IngredientName} from "../../ingredients/interface/IIngredient.ts";
import {MoonshineFlavor} from "../../moonshine/interface/IMoonshine.ts";

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

class mockDistiller extends VintageDistiller {
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

describe('VintageDistiller', () => {
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
      expect(moonshine.abv).toBe(43);
      expect(moonshine.quantity).toBe(60);
      expect(moonshine.quality).toBe(53.33333333333334);
      expect(moonshine.flavor).toBe(MoonshineFlavor.FRUITY);
    });
    test('no ingredients', () => {
      const distiller = new mockDistiller(heaterMock);
      expect(() => distiller.distill()).toThrowError('No ingredients = no moonshine');
    });
  })
  test('calculateQuantity', () => {
    const distiller = new mockDistiller(heaterMock);
    distiller.load([
      mockIngredient(IngredientName.Water, 50, 25),
      mockIngredient(IngredientName.Yeast, 30, 25),
      mockIngredient(IngredientName.Fruit, 100, 25),
      mockIngredient(IngredientName.Sugar, 100, 25),
    ]);
    expect(distiller.calculateQuantity()).toBe(80);
  });
  test('calculateQuality', () => {
    const distiller = new mockDistiller(heaterMock);
    distiller.load([
      mockIngredient(IngredientName.Water, 50, 25),
      mockIngredient(IngredientName.Yeast, 30, 25),
      mockIngredient(IngredientName.Fruit, 100, 25),
      mockIngredient(IngredientName.Sugar, 100, 25),
    ]);
    expect(distiller.calculateQuality()).toBe(56);
  });
  test('hasIngredient', () => {
    const distiller = new mockDistiller(heaterMock);
    distiller.load([
      mockIngredient(IngredientName.Yeast, 50, 25),
    ]);
    expect(distiller.hasIngredient('Yeast')).toBe(true);
    expect(distiller.hasIngredient('Salt')).toBe(false);
  });
  describe('calculateAbv', () => {
    test('base', () => {
      const distiller = new mockDistiller(heaterMock);
      distiller.load([
        mockIngredient(IngredientName.Water, 50, 25),
        mockIngredient(IngredientName.Fruit, 100, 25),
        mockIngredient(IngredientName.Sugar, 100, 25),
      ]);
      expect(distiller.calculateAbv(distiller.calculateQuality())).toBe(53);
    })
    test('yeast bonus', () => {
      const distiller = new mockDistiller(heaterMock);
      distiller.load([
        mockIngredient(IngredientName.Water, 50, 25),
        mockIngredient(IngredientName.Yeast, 100, 25),
        mockIngredient(IngredientName.Fruit, 100, 25),
        mockIngredient(IngredientName.Sugar, 100, 25),
      ]);
      expect(distiller.calculateAbv(distiller.calculateQuality())).toBe(73);
    })
    test('min abv', () => {
      const distiller = new mockDistiller(heaterMock);
      distiller.load([
        mockIngredient(IngredientName.Water, 50, 25),
        mockIngredient(IngredientName.Yeast, 100, 25),
        mockIngredient(IngredientName.Fruit, 100, 25),
        mockIngredient(IngredientName.Sugar, 100, 25),
      ]);
      expect(distiller.calculateAbv(0)).toBe(10);
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
