import axios from "axios";
import { useEffect } from "react";
import { Chip } from "@material-ui/core";

const Genres = ({
  selectedGenres,
  setSelectedGenres,
  genres,
  setGenres,
  type,
  setPage,
}) => {
  const handleAddGenre = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((item) => item.id !== genre.id));
    setPage(1);
  };

  const handleRemoveGenre = (genre) => {
    setSelectedGenres(
      selectedGenres.filter((selected) => selected.id !== genre.id)
    );
    setGenres([...genres, genre]);
    setPage(1);
  };

  const getGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setGenres(data.genres);
  };

  useEffect(() => {
    getGenres();

    return () => {
      setGenres({});
    };
  }, []);

  return (
    <div
      style={{
        padding: "6px 0",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      {selectedGenres &&
        selectedGenres.map((genre) => (
          <Chip
            label={genre.name}
            style={{ margin: 2 }}
            clickable
            size="small"
            key={genre.id}
            color="primary"
            onDelete={() => handleRemoveGenre(genre)}
          />
        ))}
      {genres &&
        genres.map((genre) => (
          <Chip
            label={genre.name}
            style={{ margin: 2 }}
            clickable
            size="small"
            key={genre.id}
            onClick={() => handleAddGenre(genre)}
          />
        ))}
    </div>
  );
};

export default Genres;
