import React, { useEffect, useState } from "react";
import { getAllMovies } from "../services/movieApi";
import Movies from "../pages/movies";

const MoviesContainer = () => {
  const [isLoading, setLoading] = useState(false);
  const [allMovies, setAllMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("date_added");
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const getMovieList = async () => {
      setLoading(true);
      const {
        data: {
          data: { movies },
        },
      } = await getAllMovies(page, sort);
      setHasMore(!!movies.length);
      // setHasMore(page > 5 ? false : true);
      setAllMovies((_allMovies) => _allMovies.concat(movies));
      setLoading(false);
    };
    getMovieList();
  }, [page, sort]);

  console.log(allMovies.length);

  // const getNextMovies = () => {
  //   setPage(page + 1);
  // };

  // const sortedMovies = (sort) => {
  //   setAllMovies([]);
  //   setSort(sort);
  // };

  return (
    <div>
      <Movies
        isLoading={isLoading}
        allMovies={allMovies}
        setAllMovies={setAllMovies}
        hasMore={hasMore}
        page={page}
        setPage={setPage}
        setSort={setSort}
      />
    </div>
  );
};

export default MoviesContainer;
