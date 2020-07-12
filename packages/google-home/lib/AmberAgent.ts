import { currentPriceIntent } from "./CurrentPriceIntent";
import { dialogflow, DialogflowConversation } from "actions-on-google";

export function createAgent(postCode: string) {
  const amberAgent = dialogflow();
  amberAgent.intent("Electricity Price", (conv: DialogflowConversation) => currentPriceIntent(conv, postCode));
  return amberAgent;
}
