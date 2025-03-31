import {BaseDistiller} from "./AbstractDistiller.ts";
import {DistillerType} from "../interface/IDistiller.ts";
import {round} from "../../../../helpers/math.ts";

export class StudentsDistiller extends BaseDistiller {
  readonly efficiency = 40;
  readonly qualityFactor = 60;
  readonly type = DistillerType.STUDENTS;
  readonly abvFactor = 10000;
  readonly minAbv = 0;

  protected calculateAbv(quality: number): number {
    const baseAlcohol = (quality * (this.efficiency / 100) * this.getHeatPower()) / this.abvFactor;
    return round(Math.min(this.maxAbv, Math.max(this.minAbv, baseAlcohol * 100)));
  }
}
