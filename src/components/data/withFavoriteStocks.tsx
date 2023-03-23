import React from "react";
import { connect } from "react-redux";
import { flowRight } from "lodash";
import { Stock } from "../../actions/stock";

export interface WithFavoriteStocksProps {
  favoriteStocks: {
    [key: string]: Stock;
  };
}

const withFavoriteStocks = (WrappedComponent: any) => {
  const WithFavoriteStocks = (props: any) => {
    const { favoriteStocks } = props;

    return (
      <WrappedComponent
        {...props}
        favoriteStocks={favoriteStocks}
      ></WrappedComponent>
    );
  };

  return flowRight(
    connect((state: any) => ({
      favoriteStocks: state.favoriteStocks,
    }))
  )(WithFavoriteStocks);
};

export { withFavoriteStocks };
