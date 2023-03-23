import React from "react";
import {
  withStyles,
  WithStyles,
  createStyles,
  Theme,
} from "@material-ui/core/styles";
import { Stock } from "../../actions/stock";

const styles = () =>
  createStyles({
    tickerSymbol: {
      marginRight: "5px",
      fontWeight: "bold",
    },
  });

export type StockListProps = WithStyles<typeof styles> & {
  stocks: Stock[];
};

const StockListComponent = (props: StockListProps) => {
  const { classes, stocks } = props;

  return (
    <>
      {stocks?.map((stock: Stock) => {
        return (
          <p>
            <span className={classes.tickerSymbol}>{stock.symbol}</span>
            {stock.name}
          </p>
        );
      })}
    </>
  );
};

export const StockList = withStyles(styles)(StockListComponent);
