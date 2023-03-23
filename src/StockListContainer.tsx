import React, { useEffect, useState } from "react";
import { StockList } from "./components";
import { getStocks, Stock, StockSearchResponse } from "./actions/stock";

interface StockListContainerState {
  search: string;
  stocks: Stock[];
}

const StockListContainer = () => {
  const [state, setState] = useState<StockListContainerState>({
    stocks: [],
    search: "",
  });

  useEffect(() => {
    const fetchStocks = async () => {
      const stocksResponse = await getStocks(state.search);
      setState({ ...state, stocks: stocksResponse.stocks });
    };

    if (state.search) {
      fetchStocks();
    } else {
      setState({ ...state, stocks: [] });
    }
  }, [state.search]);

  const onSearchChange = (e: any) => {
    setState({ ...state, search: e.target.value });
  };

  return (
    <div>
      <input type="text" onChange={onSearchChange}></input>
      <StockList stocks={state.stocks}></StockList>
    </div>
  );
};

export default StockListContainer;
