import {Sugar} from "./Sugar.ts";

describe('Sugar', () => {
  test('base', () => {
    const sugar = new Sugar(60, 1);
    sugar.prepare();

    expect(sugar.isPrepared).toBe(true);
  });
});
