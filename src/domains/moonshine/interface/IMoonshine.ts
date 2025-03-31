export enum MoonshineFlavor {
  FRUITY = "Fruity",
  SWEET = "Sweet",
  STRONG = "Strong",
  SMOOTH = "Smooth",
  AWFUL = "Awful",
}

export interface IMoonshine {
  abv: number; // alcohol percentage by volume (0-96)
  quantity: number; // liters
  quality: number; // 0-100, used to calculate the quality of the product
  flavor: MoonshineFlavor; // flavor of the moonshine
}
