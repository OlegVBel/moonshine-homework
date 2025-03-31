import {BaseDistiller} from "./AbstractDistiller.ts";
import {DistillerType} from "../interface/IDistiller.ts";
import {round} from "../../../../helpers/math.ts";

export class ModernDistiller extends BaseDistiller {
  readonly efficiency = 95;
  readonly qualityFactor = 90;
  readonly type = DistillerType.MODERN;
  readonly abvFactor = 9000;
  readonly minAbv = 30;
  readonly yeastBonus = 1.5;

  protected calculateAbv(quality: number): number {
    const heatPower = this.getHeatPower();
    const yeastBonus = this.hasIngredient('Yeast') ? this.yeastBonus : 1;
    const baseAlcohol = (quality * (this.efficiency / 100) * heatPower * yeastBonus) / this.abvFactor;
    return round(Math.min(this.maxAbv, Math.max(this.minAbv, baseAlcohol * 100)));
  }
}
