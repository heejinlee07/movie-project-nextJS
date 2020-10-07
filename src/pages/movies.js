import React, { useEffect, useState } from "react";
import Link from "next/link";
import InfiniteScroll from "react-infinite-scroll-component";
import { useRouter } from "next/router";
import Router from "next/router";
import Header from "../components/Header";
import { getAllMovies } from "../services/movieApi";
import MoviesList from "../components/MoviesList";
import Button from "../components/common/Button";

export default function Movies() {
  const [isLoading, setLoading] = useState(false);
  const [allMovies, setAllMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("date_added");

  const router = useRouter();
  useEffect(() => {
    async function getMovieList() {
      setLoading(true);
      const {
        data: {
          data: { movies },
        },
      } = await getAllMovies(page, sort);
      setAllMovies((_allMovies) => _allMovies.concat(movies));
      setLoading(false);
    }
    getMovieList();
  }, [page, sort]);

  const getNextMovies = () => setPage(page + 1);

  const sortedMovies = (sort) => {
    setAllMovies([]);
    setSort(sort);
  };

  return (
    <div>
      <Header />
      <InfiniteScroll
        dataLength={allMovies.length}
        next={getNextMovies}
        loader={<h1>is Loading...</h1>}
        inverse={false}
        hasMore={true}
      >
        <Button padding={5} margin={"5px"} onClick={() => router.back()}>
          뒤로가기
        </Button>
        <Button onClick={() => sortedMovies("title")}>title 정렬</Button>
        <Button onClick={() => sortedMovies("year")}>year 정렬</Button>
        <Button onClick={() => sortedMovies("rating")}>rating 정렬</Button>
        {isLoading && <h1>Now Loading...</h1>}
        {allMovies?.map((movie) => (
          <MoviesList key={movie.id} movie={movie} />
        ))}
      </InfiniteScroll>
    </div>
  );
}
