import { DialogflowConversation } from "actions-on-google";
import { AmberApi, AmberPrices } from "@amber-electric/core";
const amberApi = new AmberApi();
export async function currentPriceIntent(conv: DialogflowConversation, postCode: string) {
  //TODO: cache this till next period
  const priceData = new AmberPrices(await amberApi.getPrices(postCode));
  const message = `The price is currently ${Math.round(priceData.getCurrentPrice())} cents`;
  conv.close(message);
}
