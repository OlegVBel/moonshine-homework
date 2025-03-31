import {Water} from "./Water.ts";

describe('Water', () => {
  test('base', () => {
    const water = new Water(70, 1);
    water.prepare();

    expect(water.isPrepared).toBe(true);
    expect(water.quality).toBe(80);
  });

  test('increase quality', () => {
    const water = new Water(80, 1);
    water.prepare();
    water.use();

    expect(water.quality).toBe(90);
  });
});
