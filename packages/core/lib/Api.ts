import axios from "axios"
export class AmberApi {

    private const client = axios({ baseUrl: "https://api.amberelectric.com.au" })

    public async getPrices(postcode: string) {
        const { data } = await axios.post("/prices/listprices", { postcode });

    }
}


