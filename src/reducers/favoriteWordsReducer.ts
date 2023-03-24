import { Action as ReduxAction } from "redux";
import {
  ADD_FAVORITE_WORD,
  REMOVE_FAVORITE_WORD,
  WordMatch,
} from "../actions/word";

interface Action extends ReduxAction {
  payload?: any;
}

export interface WordState {
  [key: string]: WordMatch;
}

const initialState: WordState = {};

export default function favoriteWordsReducer(
  state = initialState,
  action: Action
) {
  switch (action.type) {
    case ADD_FAVORITE_WORD:
      return {
        ...state,
        [action.payload.word]: {
          ...action.payload,
          isFavorite: true,
        },
      };
    case REMOVE_FAVORITE_WORD:
      const { [action.payload]: value, ...updatedStore } = state;
      return updatedStore;
    default:
      return state;
  }
}
