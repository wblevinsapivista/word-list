import React, { useContext } from "react";
import { createStyles, withStyles } from "@material-ui/styles";
import { flowRight } from "lodash";
import { Grid, IconButton } from "@material-ui/core";
import { Remove } from "@material-ui/icons";
import { withFavoriteStocks } from "../../data/withFavoriteStocks";
import { removeFromFavorites } from "../../../actions/stock";
import { ReactReduxContext } from "react-redux";

const styles = () =>
  createStyles({
    favoriteStockItem: {
      display: "inline-block",
      float: "left",
    },
  });

const FavoriteStockListComponent = (props: any) => {
  const { store } = useContext(ReactReduxContext);
  const { favoriteStocks, classes } = props;

  return (
    <Grid container>
      {Object.keys(favoriteStocks).map((key) => {
        const favoriteStock = favoriteStocks[key];
        return (
          <>
            <Grid xs={9}>
              <p className={classes.favoriteStockItem}>
                <span className={classes.tickerSymbol}>
                  {favoriteStock.symbol}
                </span>
                {favoriteStock.name}
              </p>
            </Grid>
            <Grid xs={3}>
              <IconButton onClick={() => removeFromFavorites(key, store)}>
                <Remove></Remove>
              </IconButton>
            </Grid>
          </>
        );
      })}
    </Grid>
  );
};

export const FavoriteStockList = flowRight(
  withStyles(styles),
  withFavoriteStocks
)(FavoriteStockListComponent);
