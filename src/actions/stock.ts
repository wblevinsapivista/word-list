import { useContext } from "react";
import { ReactReduxContext } from "react-redux";
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
  isFavorite: boolean;
}

export interface StockSearchResponse {
  stocks: Stock[];
}

export const ADD_FAVORITE_STOCK = "ADD_FAVORITE_STOCK";
export const REMOVE_FAVORITE_STOCK = "REMOVE_FAVORITE_STOCK";

export const getStocks = async (
  searchStr: string
): Promise<StockSearchResponse> => {
  let { data } = await StockController.searchStocks(searchStr);
  return mapResponse(data);
};

export const setActiveStock = () => {};

export const addToFavorites = (stock: Stock, store: any) => {
  store.dispatch({ type: ADD_FAVORITE_STOCK, payload: stock });
};

export const removeFromFavorites = (ticker: string, store: any) => {
  store.dispatch({ type: REMOVE_FAVORITE_STOCK, payload: ticker });
};
