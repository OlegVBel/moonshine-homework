import {IWoodHeater} from "../interface/IWoodHeater.ts";

export class WoodHeater implements IWoodHeater {
  readonly woodDryness: number;

  constructor(woodDryness: number) {
    this.woodDryness = woodDryness;
  }

  heat(): number {
    console.log('Burning wood');
    return Math.min(100, this.woodDryness * 10);
  }
}
