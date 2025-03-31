import {IIngredient} from "../../ingredients/interface/IIngredient.ts";
import {IHeater} from "../../heating/interface/IHeater.ts";
import {DistillerType, IDistiller} from "../interface/IDistiller.ts";
import {Moonshine} from "../../moonshine/class/Moonshine.ts";
import {FlavorClassifier} from "../../moonshine/class/FlavorClassifier.ts";

export abstract class BaseDistiller implements IDistiller {
  abstract readonly efficiency: number;
  abstract readonly type: DistillerType;
  abstract readonly qualityFactor: number;
  abstract readonly abvFactor: number;
  abstract readonly minAbv: number;
  readonly yeastBonus: number;
  maxAbv = 96;

  protected _ingredients: IIngredient[] = [];
  protected _heater: IHeater;

  constructor(heater: IHeater) {
    this._heater = heater;
  }

  load(ingredients: IIngredient[]): void {
    this._ingredients.push(...ingredients);
  }

  prepare(): void {
    this._ingredients.forEach(i => i.prepare());
  }

  distill(): Moonshine {
    if (!this.getIngredients().length) {
      throw new Error("No ingredients = no moonshine");
    }
    this.useIngredients();

    const quantity = this.calculateQuantity();
    const quality = this.calculateQuality();
    const abv = this.calculateAbv(quality);

    const flavor = FlavorClassifier.classify({ ingredients: this.getIngredients(), quality, abv });
    return new Moonshine(abv, quantity, quality, flavor);
  }

  protected useIngredients(): void {
    this._ingredients.forEach(i => i.use());
  }

  protected calculateQuantity(): number {
    return this._ingredients.reduce((acc, curr) => acc + curr.quantity, 0) * (this.efficiency / 100);
  }

  protected calculateQuality(): number {
    const totalQuality = this._ingredients.reduce((acc, curr) => acc + curr.quality, 0);
    return totalQuality / this._ingredients.length * (this.qualityFactor / 100);
  }

  protected hasIngredient(name: string): boolean {
    return this._ingredients.some(i => i.name === name);
  }

  protected getHeatPower(): number {
    return this._heater.heat();
  }

  protected getIngredients(): IIngredient[] {
    return this._ingredients;
  }

  abstract calculateAbv(quality: number): number;
}
