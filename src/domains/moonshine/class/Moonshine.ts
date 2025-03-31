import {IMoonshine, MoonshineFlavor} from "../interface/IMoonshine.ts";

export class Moonshine implements IMoonshine {
  constructor(readonly abv: number, readonly quantity: number, readonly quality: number, readonly flavor: MoonshineFlavor) {
    this.abv = Math.max(0, Math.min(96, abv));
    this.quantity = quantity;
    this.quality = Math.max(0, Math.min(100, quality));
    this.flavor = flavor;
  }
}
