import "./nav.css";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
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
  const history = useHistory();

  useEffect(() => {
    if (value === 0) {
      history.push("/");
    } else if (value === 1) {
      history.push("/movies");
    } else if (value === 2) {
      history.push("/tv");
    } else if (value === 3) {
      history.push("/search");
    }
  }, [value]);

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
        style={{ color: "white" }}
        label="Trending"
        icon={<TrendingUpIcon />}
      />
      <BottomNavigationAction
        style={{ color: "white" }}
        label="Movies"
        icon={<MovieFilterIcon />}
      />
      <BottomNavigationAction
        style={{ color: "white" }}
        label="TV"
        icon={<TvIcon />}
      />
      <BottomNavigationAction
        style={{ color: "white" }}
        label="Search"
        icon={<SearchIcon />}
      />
    </BottomNavigation>
  );
}
