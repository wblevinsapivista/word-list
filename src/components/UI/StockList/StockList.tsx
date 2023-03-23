import React, { useContext } from "react";
import { withStyles, WithStyles, createStyles } from "@material-ui/core/styles";
import { Button, Grid, IconButton } from "@material-ui/core";
import {
  Stock,
  addToFavorites,
  removeFromFavorites,
} from "../../../actions/stock";
import { ReactReduxContext } from "react-redux";
import { flowRight } from "lodash";
import {
  withFavoriteStocks,
  WithFavoriteStocksProps,
} from "../../data/withFavoriteStocks";
import { Add, Check } from "@material-ui/icons";

const styles = () =>
  createStyles({
    tickerSymbol: {
      marginRight: "5px",
      fontWeight: "bold",
    },
    stockItem: {
      display: "inline-block",
      float: "left",
    },
    checkIcon: {
      marginTop: "15px",
      color: "#7B7B7B",
    },
  });

export type StockListProps = WithStyles<typeof styles> &
  WithFavoriteStocksProps & {
    stocks: Stock[];
  };

const StockListComponent = (props: StockListProps) => {
  const { store } = useContext(ReactReduxContext);
  const { classes, stocks, favoriteStocks } = props;

  const isFavorited = (stock: Stock) => {
    return favoriteStocks[stock.symbol]?.isFavorite;
  };

  return (
    <Grid container>
      {stocks?.map((stock: Stock) => {
        return (
          <>
            <Grid xs={9}>
              <p className={classes.stockItem}>
                <span className={classes.tickerSymbol}>{stock.symbol}</span>
                {stock.name}
              </p>
            </Grid>
            <Grid xs={3}>
              {isFavorited(stock) ? (
                <Check className={classes.checkIcon}></Check>
              ) : (
                <IconButton onClick={() => addToFavorites(stock, store)}>
                  <Add></Add>
                </IconButton>
              )}
            </Grid>
          </>
        );
      })}
    </Grid>
  );
};

export const StockList = flowRight(
  withStyles(styles),
  withFavoriteStocks
)(StockListComponent);
