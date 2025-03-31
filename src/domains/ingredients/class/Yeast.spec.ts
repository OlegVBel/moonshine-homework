import {Yeast} from "./Yeast.ts";

describe('Yeast', () => {
  test('reduce quality by 40 if not prepared', () => {
    const yeast = new Yeast(90, 1);
    yeast.use();
    expect(yeast.quality).toBe(50);
  });

  test('not reduce quality if prepared', () => {
    const yeast = new Yeast(90, 1);
    yeast.prepare();
    yeast.use();
    expect(yeast.quality).toBe(90);
  });
});
