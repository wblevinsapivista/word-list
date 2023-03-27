import { SEARCH_TEXT_CHANGED } from "../actions/search";
import searchTextReducer from "./searchTextReducer";

it("updates state as expected when action is SEARCH_TEXT_CHANGED", () => {
  const expectedPayloadStr = "blah...";
  const updatedState = searchTextReducer("", {
    type: SEARCH_TEXT_CHANGED,
    payload: expectedPayloadStr,
  });
  expect(updatedState).toEqual(expectedPayloadStr);
});

it("returns unaltered state when given unknown action", () => {
  const updatedState = searchTextReducer("", {
    type: "wha???",
    payload: "Blah...",
  });
  expect(updatedState).toEqual("");
});
