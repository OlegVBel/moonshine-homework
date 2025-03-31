import {IIngredient, IngredientName} from "../interface/IIngredient.ts";

export abstract class AbstractIngredient implements IIngredient {
  readonly name: IngredientName;
  readonly quantity: number;
  private _quality: number;
  isPrepared: boolean = false;

  protected constructor(name: IngredientName, quality: number, quantity: number) {
    this.name = name;
    this.quantity = quantity;
    this._quality = Math.max(0, Math.min(100, quality));
  }

  get quality(): number {
    return this._quality;
  }

  set quality(value: number) {
    this._quality = Math.max(0, Math.min(100, value));
  }

  prepare() {
    this.isPrepared = true;
    this.doPrepare();
  }

  protected abstract doPrepare(): void;
  protected abstract use(): void;
}
