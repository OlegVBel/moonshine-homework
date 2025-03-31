import {IHeater} from "./IHeater.ts";

export interface IWoodHeater extends IHeater {
  readonly woodDryness: number;
}
