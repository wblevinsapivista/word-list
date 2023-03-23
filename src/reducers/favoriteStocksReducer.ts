import { Action as ReduxAction } from "redux";
import {
  Stock,
  ADD_FAVORITE_STOCK,
  REMOVE_FAVORITE_STOCK,
} from "../actions/stock";

interface Action extends ReduxAction {
  payload?: any;
}

export interface StockState {
  [key: string]: Stock;
}

const initialState: StockState = {};

export default function favoriteStockReducer(
  state = initialState,
  action: Action
) {
  switch (action.type) {
    case ADD_FAVORITE_STOCK:
      return {
        ...state,
        [action.payload.symbol]: {
          ...action.payload,
          isFavorite: true,
        },
      };
    case REMOVE_FAVORITE_STOCK:
      const { [action.payload]: value, ...updatedStore } = state;
      return updatedStore;
    default:
      return state;
  }
}
