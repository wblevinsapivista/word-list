import React, { useEffect, useState } from "react";
import { createStyles, Grid, withStyles } from "@material-ui/core";
import { WordList } from "./components/UI/WordList";
import { Navbar } from "./components/UI/Navbar";
import { getWords, WordMatch } from "./actions/word";
import { flowRight } from "lodash";
import {
  withFavoriteWords,
  WithFavoriteWordsProps,
} from "./components/data/withFavoriteWords";
import {
  WithSearchTextProps,
  withSearchText,
} from "./components/data/withSearchText";
import { FavoriteWordList } from "./components/UI/FavoriteWordList/FavoriteWordList";
import { WithStyles } from "@material-ui/styles";

const styles = () =>
  createStyles({
    containerWrapper: {
      margin: "25px",
    },
  });

type Props = WithFavoriteWordsProps &
  WithSearchTextProps &
  WithStyles<typeof styles>;

interface WordListContainerState {
  words: WordMatch[];
  selectedWord: WordMatch | null;
}

const WordListContainer = (props: Props) => {
  const { searchText, favoriteWords, classes } = props;

  const [state, setState] = useState<WordListContainerState>({
    words: [],
    selectedWord: null,
  });

  useEffect(() => {
    const fetchWords = async () => {
      const wordsResponse = await getWords(searchText);
      setState({ ...state, words: wordsResponse });
    };

    if (searchText) {
      fetchWords();
    } else {
      setState({ ...state, words: [] });
    }
  }, [searchText]);

  return (
    <Grid container className={classes.containerWrapper}>
      <Grid item xs={6}>
        {state.words?.length ? (
          <>
            <h1>Search Results</h1>
            <WordList words={state.words}></WordList>
          </>
        ) : (
          <></>
        )}
      </Grid>
      <Grid item xs={6}>
        {favoriteWords ? <FavoriteWordList></FavoriteWordList> : <></>}
      </Grid>
    </Grid>
  );
};

export default flowRight(
  withStyles(styles),
  withFavoriteWords,
  withSearchText
)(WordListContainer);
