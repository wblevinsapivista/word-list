export const SEARCH_TEXT_CHANGED = "SEARCH_TEXT_CHANGED";

export const onSearchChange = (search: string, store: any) => {
  store.dispatch({ type: SEARCH_TEXT_CHANGED, payload: search });
};
