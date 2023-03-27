import { WordController } from "../api/WordController";

export interface WordMatch {
  word: string;
  score: number;
  isFavorite: boolean;
}

export interface WordSearchResponse {
  words: WordMatch[];
}

export const ADD_FAVORITE_WORD = "ADD_FAVORITE_WORD";
export const REMOVE_FAVORITE_WORD = "REMOVE_FAVORITE_WORD";

export const getWords = async (searchStr: string): Promise<any> => {
  const { data } = await WordController.searchWords(searchStr);
  return data;
};

export const addToFavorites = (wordMatch: WordMatch, store: any) => {
  store.dispatch({ type: ADD_FAVORITE_WORD, payload: wordMatch });
};

export const removeFromFavorites = (word: string, store: any) => {
  store.dispatch({ type: REMOVE_FAVORITE_WORD, payload: word });
};
