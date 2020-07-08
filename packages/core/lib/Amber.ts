import { PriceData } from "./Types";

export class AmberPrices {
  constructor(private priceData: PriceData) {}

  public async getCurrentPrice(): Promise<any> {
    return this.priceData;
  }
}
