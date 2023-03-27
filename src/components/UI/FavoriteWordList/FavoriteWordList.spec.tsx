import React from "react";
import configureStore from "redux-mock-store";
import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { FavoriteWordList } from "./FavoriteWordList";
import userEvent from "@testing-library/user-event";
import * as wordActions from "../../../actions/word";

describe("FavoriteWordList", () => {
  it("renders expected words and controls", () => {
    const initState = {
      favoriteWords: [
        { word: "hello", score: 1234 },
        { word: "world", score: 5678 },
      ],
    };
    const mockStore = configureStore();
    const appStore = mockStore(initState);

    render(
      <Provider store={appStore}>
        <FavoriteWordList></FavoriteWordList>
      </Provider>
    );

    screen.getByText(/hello/i);
    screen.getByText(/world/i);
    expect(screen.getAllByLabelText(/remove-btn/i).length).toEqual(2);
  });

  it("removes word from favorite list when remove button is clicked", async () => {
    const initState = {
      favoriteWords: [{ word: "hello", score: 1234 }],
    };
    const mockStore = configureStore();
    const appStore = mockStore(initState);
    const removeSpy = jest.spyOn(wordActions, "removeFromFavorites");

    render(
      <Provider store={appStore}>
        <FavoriteWordList></FavoriteWordList>
      </Provider>
    );

    const removeBtn = screen.getByLabelText(/remove-btn/i);
    userEvent.click(removeBtn);

    expect(removeSpy).toHaveBeenCalled();
  });
});
