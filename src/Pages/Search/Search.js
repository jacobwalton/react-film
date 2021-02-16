import {
  TextField,
  createMuiTheme,
  ThemeProvider,
  Tabs,
  Button,
} from "@material-ui/core";
import { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./search.css";

const Search = () => {
  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#fff",
      },
    },
  });

  const [type, setType] = useState(0);

  const setSearchText = (e) => {
    console.log(e);
  };
  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <div style={{ display: "flex", margin: "15px 0" }}>
          <TextField
            style={{ flex: 1 }}
            label="Search"
            className="searchBox"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Button variant="contained" style={{ marginLeft: 10 }}>
            <SearchIcon />
          </Button>
        </div>
        <Tabs value={type}></Tabs>
      </ThemeProvider>
    </div>
  );
};

export default Search;
