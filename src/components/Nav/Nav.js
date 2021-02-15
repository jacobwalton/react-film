import "./nav.css";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import SearchIcon from "@material-ui/icons/Search";
import MovieFilterIcon from "@material-ui/icons/MovieFilter";
import TvIcon from "@material-ui/icons/Tv";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    backgroundColor: "rgb(25, 50, 50)",
    zIndex: 1,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        href="/"
        style={{ color: "white" }}
        label="Trending"
        icon={<TrendingUpIcon />}
      />
      <BottomNavigationAction
        href="/movies"
        style={{ color: "white" }}
        label="Movies"
        icon={<MovieFilterIcon />}
      />
      <BottomNavigationAction
        href="/tv"
        style={{ color: "white" }}
        label="TV"
        icon={<TvIcon />}
      />
      <BottomNavigationAction
        href="/search"
        style={{ color: "white" }}
        label="Search"
        icon={<SearchIcon />}
      />
    </BottomNavigation>
  );
}
