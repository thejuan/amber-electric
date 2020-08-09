import { createAgent } from "@amber-electric/google-home";
export const amberAgent = createAgent(process.env.POSTCODE!);

export const ping = async () => {
  return { body: "pong" };
};
