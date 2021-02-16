import {
  TextField,
  createMuiTheme,
  ThemeProvider,
  Tabs,
  Tab,
  Button,
} from "@material-ui/core";
import { useState, useEffect } from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./search.css";
import axios from "axios";
import Pagination from "../../components/Pagination/Pagination";
import Card from "../../components/Card/Card";

const Search = () => {
  const [numOfPages, setNumOfPages] = useState([]);
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [content, setContent] = useState();
  const [type, setType] = useState(0);

  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#fff",
      },
    },
  });

  const getSearch = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${
          process.env.REACT_APP_API_KEY
        }&llanguage=en-US&query=${searchText}&page=${page}&include_adult=false`
      );
      setContent(data.results);
      setNumOfPages(data.total_pages);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    window.scroll(0, 0);
    getSearch();
  }, [type, page]);

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
          <Button
            variant="contained"
            style={{ marginLeft: 10 }}
            onClick={getSearch}
          >
            <SearchIcon />
          </Button>
        </div>
        <Tabs
          value={type}
          indicatorColor="primary"
          textColor="primary"
          onChange={(e, newValue) => {
            setType(newValue);
            setPage(1);
          }}
        >
          <Tab style={{ width: "50%" }} label="Search for Movies"></Tab>
          <Tab style={{ width: "50%" }} label="Search for TV Series"></Tab>
        </Tabs>
      </ThemeProvider>
      <div className="trending">
        {content &&
          content.map((item, key) => (
            <Card
              key={key}
              id={item.id}
              poster={item.poster_path}
              title={item.title || item.name}
              date={item.release_date || item.first_air_date}
              media_type={type ? "tv" : "movie"}
              vote_average={item.vote_average}
            />
          ))}
        {searchText &&
          !content &&
          (type ? <h2>No Series Found</h2> : <h2>No Movies Found</h2>)}
      </div>
      {numOfPages > 1 && (
        <Pagination setPage={setPage} numOfPages={numOfPages} />
      )}
    </div>
  );
};

export default Search;
