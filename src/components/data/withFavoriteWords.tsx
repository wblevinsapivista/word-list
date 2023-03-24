import React from "react";
import { connect } from "react-redux";
import { flowRight } from "lodash";
import { WordMatch } from "../../actions/word";

export interface WithFavoriteWordsProps {
  favoriteWords: {
    [key: string]: WordMatch;
  };
}

const withFavoriteWords = (WrappedComponent: any) => {
  const WithFavoriteWords = (props: any) => {
    const { favoriteWords } = props;

    return (
      <WrappedComponent
        {...props}
        favoriteWords={favoriteWords}
      ></WrappedComponent>
    );
  };

  return flowRight(
    connect((state: any) => ({
      favoriteWords: state.favoriteWords,
    }))
  )(WithFavoriteWords);
};

export { withFavoriteWords };
