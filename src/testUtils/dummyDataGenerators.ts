import { WordMatch } from "../actions/word";
import { faker } from "@faker-js/faker";
import { merge } from "lodash";

export const createDummyWordMatch = (payload: Partial<WordMatch> = {}): any => {
  return merge(
    {
      isFavorite: faker.datatype.boolean(),
      word: faker.random.word(),
    },
    payload
  );
};
