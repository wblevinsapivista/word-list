import React, { useContext } from "react";
import { createStyles, withStyles } from "@material-ui/styles";
import { flowRight } from "lodash";
import { Grid, IconButton } from "@material-ui/core";
import { Remove } from "@material-ui/icons";
import { withFavoriteWords } from "../../data/withFavoriteWords";
import { removeFromFavorites } from "../../../actions/word";
import { ReactReduxContext } from "react-redux";

const styles = () =>
  createStyles({
    favoriteWordItem: {
      display: "inline-block",
      float: "left",
    },
  });

const FavoriteWordListComponent = (props: any) => {
  const { store } = useContext(ReactReduxContext);
  const { favoriteWords, classes } = props;

  return (
    <Grid container>
      {Object.keys(favoriteWords).map((key) => {
        const favoriteWord = favoriteWords[key];
        return (
          <>
            <Grid xs={9}>
              <p className={classes.favoriteWordItem}>
                <span className={classes.tickerSymbol}>
                  {favoriteWord.word}
                </span>
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

export const FavoriteWordList = flowRight(
  withStyles(styles),
  withFavoriteWords
)(FavoriteWordListComponent);
