import React, { useEffect, useState } from "react";
import { createStyles, Grid, withStyles } from "@material-ui/core";
import { StockList, StockDetail } from "./components";
import { Navbar } from "./components/UI/Navbar";
import { getStocks, Stock } from "./actions/stock";
import { flowRight } from "lodash";
import {
  withFavoriteStocks,
  WithFavoriteStocksProps,
} from "./components/data/withFavoriteStocks";
import {
  WithSearchTextProps,
  withSearchText,
} from "./components/data/withSearchText";
import { FavoriteStockList } from "./components/UI/FavoriteStockList/FavoriteStockList";

const styles = () => createStyles({});

type Props = WithFavoriteStocksProps & WithSearchTextProps;

interface StockListContainerState {
  stocks: Stock[];
  selectedStock: Stock | null;
}

const StockListContainer = (props: Props) => {
  const { searchText } = props;

  const [state, setState] = useState<StockListContainerState>({
    stocks: [],
    selectedStock: null,
  });

  useEffect(() => {
    const fetchStocks = async () => {
      const stocksResponse = await getStocks(searchText);
      setState({ ...state, stocks: stocksResponse.stocks });
    };

    if (searchText) {
      fetchStocks();
    } else {
      setState({ ...state, stocks: [] });
    }
  }, [searchText]);

  return (
    <>
      <Grid container>
        <Grid item xs={6}>
          <StockList stocks={state.stocks}></StockList>
        </Grid>
        <Grid item xs={6}>
          <FavoriteStockList></FavoriteStockList>
        </Grid>
      </Grid>
    </>
  );
};

export default flowRight(
  withStyles(styles),
  withFavoriteStocks,
  withSearchText
)(StockListContainer);
