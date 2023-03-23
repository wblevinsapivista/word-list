import { Action as ReduxAction } from "redux";
import { SEARCH_TEXT_CHANGED } from "../actions/search";

interface Action extends ReduxAction {
  payload?: any;
}

export interface SearchState {
  searchText: string;
}

const initialState: SearchState = {
  searchText: "",
};

export default function favoriteStockReducer(
  state = initialState,
  action: Action
) {
  switch (action.type) {
    case SEARCH_TEXT_CHANGED:
      return action.payload;
    default:
      return state;
  }
}
