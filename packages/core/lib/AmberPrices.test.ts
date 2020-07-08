import { AmberPrices } from "./AmberPrices";

describe("Amber", () => {
  it("should calculate current price", async () => {
    const amber = new AmberPrices(require("./testData/prices.json").data);
    expect(await amber.getCurrentPrice()).toBe(18.92542814);
  });
});
