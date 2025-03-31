import {IIngredient} from "../../ingredients/interface/IIngredient.ts";
import {Moonshine} from "../../moonshine/class/Moonshine.ts";

export enum DistillerType {
  VINTAGE = "Vintage",
  STUDENTS = "Students",
  MODERN = "Modern",
}

export interface IDistiller {
  efficiency: number; // 0-100, the efficiency of the distiller
  type: DistillerType; // type of the distiller
  qualityFactor: number; // 0-100, в залежності від типу дистилятора впливає на якість самогону
  abvFactor: number; // в залежності від типу дистилятора впливає на міцність самогону
  minAbv: number; // мінімальна міцність
  maxAbv: number; // максимальна міцність
  yeastBonus: number;

  load(ingredients: IIngredient[]): void; // додає інгредієнт до дистилятора
  prepare(): void; // дозволяє підготувати інгредієнти перед дистиляцією, щоб покращити якість самогону
  distill(): Moonshine; // проводить дистиляцію інгредієнтів у самогон
}
