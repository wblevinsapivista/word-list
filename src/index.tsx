import React from "react";
import ReactDOM from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
import "./index.css";
import App from "./App";
import favoriteStockReducer from "./reducers/favoriteStocksReducer";
import searchTextReducer from "./reducers/searchTextReducer";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: {
    favoriteStocks: favoriteStockReducer,
    searchText: searchTextReducer,
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
