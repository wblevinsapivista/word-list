import React from "react";
import { screen, render, waitFor } from "@testing-library/react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import userEvent from "@testing-library/user-event";
import { createDummyWordMatch } from "../../../testUtils/dummyDataGenerators";
import { WordMatch } from "../../../actions/word";
import * as wordActions from "../../../actions/word";
import { WordList } from "./WordList";

describe("WordList", () => {
  let dummyWord0: WordMatch,
    dummyWord1: WordMatch,
    dummyWord2: WordMatch,
    dummyWord3: WordMatch,
    dummyWord4: WordMatch,
    dummyWord5: WordMatch,
    dummyWord6: WordMatch;
  let dummyWords: WordMatch[] = [];
  let initState = {};

  beforeEach(() => {
    dummyWord0 = createDummyWordMatch();
    dummyWord1 = createDummyWordMatch();
    dummyWord2 = createDummyWordMatch();
    dummyWord3 = createDummyWordMatch();
    dummyWord4 = createDummyWordMatch();
    dummyWord5 = createDummyWordMatch();
    dummyWord6 = createDummyWordMatch();

    dummyWords = [
      dummyWord0,
      dummyWord1,
      dummyWord2,
      dummyWord3,
      dummyWord4,
      dummyWord5,
      dummyWord6,
    ];

    initState = {
      words: dummyWords,
      favoriteWords: [],
    };
  });

  it("renders provided list of words", () => {
    const mockStore = configureStore();
    const appStore = mockStore(initState);

    const { getByText } = render(
      <Provider store={appStore}>
        <WordList words={dummyWords}></WordList>
      </Provider>
    );

    getByText(dummyWord0.word);
    getByText(dummyWord1.word);
    getByText(dummyWord2.word);
    getByText(dummyWord3.word);
    getByText(dummyWord4.word);
    getByText(dummyWord5.word);
    getByText(dummyWord6.word);
  });

  it("calls addToFavorites spy when word is favorited", async () => {
    const addToFavoritesSpy = jest.spyOn(wordActions, "addToFavorites");
    const mockStore = configureStore();
    const appStore = mockStore(initState);

    const { getByText, getAllByLabelText } = render(
      <Provider store={appStore}>
        <WordList words={dummyWords}></WordList>
      </Provider>
    );

    getByText(dummyWord0.word);

    const favoriteBtns = getAllByLabelText(/favorite-btn/i);
    expect(favoriteBtns.length).toEqual(7);
    userEvent.click(favoriteBtns[0]);

    expect(addToFavoritesSpy).toHaveBeenCalledWith(
      dummyWord0,
      expect.anything()
    );
  });
});
