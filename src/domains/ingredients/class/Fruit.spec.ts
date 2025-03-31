import {Fruit} from "./Fruit.ts";

describe('Fruit', () => {
  test('base', () => {
    const fruit = new Fruit(70, 1);
    fruit.prepare();

    expect(fruit.isPrepared).toBe(true);
    expect(fruit.quality).toBe(70);
  });

  test('reduce quality if not prepared before use', () => {
    const fruit = new Fruit(80, 1);
    fruit.use();

    expect(fruit.quality).toBe(60);
  });

  test('not reduce quality if prepared', () => {
    const fruit = new Fruit(80, 1);
    fruit.prepare();
    fruit.use();

    expect(fruit.quality).toBe(80);
  });
});
