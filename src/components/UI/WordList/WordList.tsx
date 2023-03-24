import React, { useContext } from "react";
import { withStyles, WithStyles, createStyles } from "@material-ui/core/styles";
import { Button, Grid, IconButton } from "@material-ui/core";
import { ReactReduxContext } from "react-redux";
import { flowRight } from "lodash";
import { Add, Check } from "@material-ui/icons";
import {
  withFavoriteWords,
  WithFavoriteWordsProps,
} from "../../data/withFavoriteWords";
import {
  WordMatch,
  addToFavorites,
  removeFromFavorites,
} from "../../../actions/word";

const styles = () =>
  createStyles({
    wordItem: {
      display: "inline-block",
      float: "left",
    },
    checkIcon: {
      marginTop: "15px",
      color: "#7B7B7B",
    },
  });

export type WordListProps = WithStyles<typeof styles> &
  WithFavoriteWordsProps & {
    words: WordMatch[];
  };

const WordListComponent = (props: WordListProps) => {
  const { store } = useContext(ReactReduxContext);
  const { classes, words, favoriteWords } = props;

  const isFavorited = (wordMatch: WordMatch) => {
    return favoriteWords[wordMatch.word]?.isFavorite;
  };

  return (
    <Grid container>
      {words?.map((wordMatch: WordMatch) => {
        return (
          <>
            <Grid xs={9}>
              <p className={classes.wordItem}>{wordMatch.word}</p>
            </Grid>
            <Grid xs={3}>
              {isFavorited(wordMatch) ? (
                <Check className={classes.checkIcon}></Check>
              ) : (
                <IconButton onClick={() => addToFavorites(wordMatch, store)}>
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

export const WordList = flowRight(
  withStyles(styles),
  withFavoriteWords
)(WordListComponent);
