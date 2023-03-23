import { StockController } from "../api/StockController";
import { mapResponse } from "../services/mapResponse";

export interface Stock {
  symbol: string;
  name: string;
  type: string;
  region: string;
  marketOpen: string;
  marketClose: string;
  timezone: string;
  currency: string;
  matchScore: string;
}

export interface StockSearchResponse {
  stocks: Stock[];
}

export const getStocks = async (
  searchStr: string
): Promise<StockSearchResponse> => {
  let { data } = await StockController.searchStocks(searchStr);
  return mapResponse(data);
};

export const setActiveStock = () => {};
