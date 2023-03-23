import axios, { AxiosResponse } from "axios";

const API_KEY = "8VG6XCZKT2JJ75FE";

export class StockController {
  public static searchStocks = async (
    searchStr: string
  ): Promise<AxiosResponse<any>> => {
    const url = `https://www.alphavantage.co/query`;

    return axios.get(url, {
      params: {
        function: "SYMBOL_SEARCH",
        apikey: API_KEY,
        keywords: searchStr,
      },
    });
  };
}
