import axios from "axios";
import { IPricesResponse, PriceData } from "./Types";

export class AmberApi {
  private client = axios.create({
    baseURL: "https://api.amberelectric.com.au",
  });

  public async getPrices(postcode: string): Promise<PriceData> {
    const { data } = await this.client.post<IPricesResponse>("/prices/listprices", { postcode });
    return data.data;
  }
}
