import { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "../../components/Pagination/Pagination";
import Card from "../../components/Card/Card";
import Genres from "../../components/Genres/Genres";
import "./movies.css";
import useGenre from "../../Hooks/useGenre";

const Movies = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);
  const genreforURL = useGenre(selectedGenres);

  const getMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`
    );
    setContent(data.results);
    setNumOfPages(data.total_pages);
  };

  useEffect(() => {
    getMovies();
  }, [page, genreforURL]);

  return (
    <div>
      <header className="pageTitle">Movies</header>
      <Genres
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        genres={genres}
        setGenres={setGenres}
        setPage={setPage}
        type="movie"
      />
      <div className="movies">
        {content ? (
          content.map((item, key) => (
            <Card
              key={key}
              id={item.id}
              poster={item.poster_path}
              title={item.title || item.name}
              date={item.release_date || item.first_air_date}
              media_type="movie"
              vote_average={item.vote_average}
            />
          ))
        ) : (
          <h1>
            NO MOVIES? Looks like something's wrong, please try again later!
          </h1>
        )}
      </div>
      {numOfPages > 1 && (
        <Pagination setPage={setPage} numOfPages={numOfPages} />
      )}
    </div>
  );
};

export default Movies;
