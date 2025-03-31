import { DistillerType } from "../interface/IDistiller.ts";
import { IHeater } from "../../heating/interface/IHeater.ts";
import { VintageDistiller } from "./VintageDistiller.ts";
import { StudentsDistiller } from "./StudentsDistiller.ts";
import { ModernDistiller } from "./ModernDistiller.ts";

type DistillerConstructor = new (heater: IHeater) => any;

const distillerMap: Record<DistillerType, DistillerConstructor> = {
  [DistillerType.VINTAGE]: VintageDistiller,
  [DistillerType.STUDENTS]: StudentsDistiller,
  [DistillerType.MODERN]: ModernDistiller,
};

export class DistillerFactory {
  static create(distillerType: DistillerType, heater: IHeater) {
    const DistillerClass = distillerMap[distillerType];
    if (!DistillerClass) {
      throw new Error(`Distiller type ${distillerType} is not supported`);
    }
    return new DistillerClass(heater);
  }
}
