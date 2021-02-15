import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../components/Card/Card";
import "./trending.css";
import Pagination from "../../components/Pagination/Pagination";

const Trending = () => {
  const [page, setPage] = useState(1);

  const [content, setContent] = useState([]);

  const getTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    );

    setContent(data.results);
  };

  useEffect(() => {
    getTrending();
  }, [page]);

  return (
    <div>
      <span className="pageTitle">Trending</span>
      <div className="trending">
        {content ? (
          content.map((item, key) => (
            <Card
              key={key}
              id={item.id}
              poster={item.poster_path}
              title={item.title || item.name}
              date={item.release_date || item.first_air_date}
              media_type={item.media_type}
              vote_average={item.vote_average}
            />
          ))
        ) : (
          <h1>
            Nothing trending? Looks like something's wrong, please try again
            later!
          </h1>
        )}
      </div>
      <Pagination setPage={setPage} />
    </div>
  );
};

export default Trending;
