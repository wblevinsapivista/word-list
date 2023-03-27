import React from "react";
import configureStore from "redux-mock-store";
import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import userEvent from "@testing-library/user-event";
import { Navbar } from "./Navbar";
import * as SearchActions from "../../../actions/search";

describe("Navbar", () => {
  const onSearchChangeSpy = jest.spyOn(SearchActions, "onSearchChange");

  it("renders", () => {
    const initState = {};
    const mockStore = configureStore();
    const appStore = mockStore(initState);

    render(
      <Provider store={appStore}>
        <Navbar></Navbar>
      </Provider>
    );
    screen.getByLabelText(/search words field/i);
  });

  it("calls onSearchChange action when user types in text field", async () => {
    const initState = {};
    const mockStore = configureStore();
    const appStore = mockStore(initState);

    render(
      <Provider store={appStore}>
        <Navbar></Navbar>
      </Provider>
    );

    const searchBox = screen.getByRole("textbox");
    userEvent.type(searchBox, "hello");

    await waitFor(() => {
      expect(onSearchChangeSpy).toHaveBeenCalled();
    });
  });
});
