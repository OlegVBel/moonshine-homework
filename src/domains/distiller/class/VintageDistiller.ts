import {DistillerType} from "../interface/IDistiller.ts";
import {BaseDistiller} from "./AbstractDistiller.ts";
import {round} from "../../../../helpers/math.ts";

export class VintageDistiller extends BaseDistiller {
  readonly efficiency = 80;
  readonly qualityFactor = 80;
  readonly type = DistillerType.VINTAGE;
  readonly abvFactor = 10000;
  readonly minAbv = 10;
  readonly yeastBonus = 1.3;

  protected calculateAbv(quality: number): number {
    const heatPower = this.getHeatPower();
    const yeastBonus = this.hasIngredient('Yeast') ? this.yeastBonus : 1;
    const baseAlcohol = (quality * (this.efficiency / 100) * heatPower * yeastBonus) / this.abvFactor;
    return round(Math.min(this.maxAbv, Math.max(this.minAbv, baseAlcohol * 100)));
  }
}
