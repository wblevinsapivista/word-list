import React, { useContext } from "react";
import {
  alpha,
  AppBar,
  Box,
  createStyles,
  IconButton,
  InputBase,
  styled,
  TextField,
  Toolbar,
  Typography,
  WithStyles,
  withStyles,
} from "@material-ui/core";
import { Search as SearchIcon } from "@material-ui/icons";
import { onSearchChange } from "../../../actions/search";
import { ReactReduxContext } from "react-redux";
import { flowRight } from "lodash";

const styles = () =>
  createStyles({
    searchInput: {
      backgroundColor: "white",
      borderRadius: "5px",
    },
    searchInputWrapper: {
      borderRadius: "5px",
    },
  });

export type Props = WithStyles<typeof styles> & {};

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const NavbarComponent = (props: Props) => {
  const { store } = useContext(ReactReduxContext);
  const { classes } = props;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Search className={classes.searchInputWrapper}>
            <TextField
              label="search words"
              onChange={(e) => {
                onSearchChange(e.target.value, store);
              }}
              variant="outlined"
              className={classes.searchInput}
            ></TextField>
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export const Navbar = flowRight(withStyles(styles))(NavbarComponent);
