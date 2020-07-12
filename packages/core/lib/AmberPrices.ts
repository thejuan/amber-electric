import { PriceData } from "./Types";

export class AmberPrices {
  constructor(private priceData: PriceData) {}

  public getCurrentPrice(): number {
    const prices = this.priceData;
    const { totalfixedKWHPrice, lossFactor } = prices.staticPrices.E1;
    const actualPeriods = prices.variablePricesAndRenewables.filter((p) => p.periodType === "ACTUAL");
    const period = actualPeriods[actualPeriods.length - 1];
    console.log("Current Period", period);
    const { wholesaleKWHPrice } = period;
    console.log(
      `Fixed price is ${totalfixedKWHPrice}, Wholesale is ${wholesaleKWHPrice} with a loss factor of ${lossFactor}`,
    );
    return +totalfixedKWHPrice + +lossFactor * +wholesaleKWHPrice;
  }
}
