import {IHeater} from "../interface/IHeater.ts";

export class ElectricHeater implements IHeater {
  constructor(
    private readonly temperatureSetting: number, // 0–100
    private readonly voltage: number = 220, // Вольтаж
    private readonly efficiency: number = 0.9, // 0.0–1.0
  ) {}

  heat(): number {
    console.log("Electric heating");
    const base = this.temperatureSetting * this.voltage * this.efficiency / 100;
    return Math.min(100, Math.round(base));
  }
}
