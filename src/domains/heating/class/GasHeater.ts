import {IHeater} from "../interface/IHeater.ts";

export class GasHeater implements IHeater {
  constructor(private readonly regulatorLevel: number) {} // 0.0–1.0

  heat(): number {
    console.log("Burning gas");
    return Math.min(100, Math.round(this.regulatorLevel * 100));
  }
}
