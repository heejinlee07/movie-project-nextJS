import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useRouter } from "next/router";
import Movie from "../movies/Movie";
import { Wrapper, ButtonList, MoviesWrapper } from "./MovieList.styles";
import Button from "../common/Button";

const MovieList = ({
  isLoading,
  allMovies,
  setAllMovies,
  hasMore,
  page,
  setPage,
  setSort,
}) => {
  const router = useRouter();

  const getNextMovies = () => {
    setPage(page + 1);
  };

  const sortedMovies = (sort) => {
    setAllMovies([]);
    setSort(sort);
  };

  return (
    <Wrapper>
      <InfiniteScroll
        dataLength={allMovies.length}
        next={getNextMovies}
        loader={<h1>is Loading...</h1>}
        inverse={false}
        hasMore={hasMore}
        endMessage={<h1>You have seen it all!</h1>}
      >
        <ButtonList>
          <Button padding={5} margin={"5px"} onClick={() => router.back()}>
            홈으로
          </Button>
          <Button onClick={() => sortedMovies("title")}>제목순</Button>
          <Button onClick={() => sortedMovies("year")}>최신순</Button>
          <Button onClick={() => sortedMovies("rating")}>별점순</Button>
        </ButtonList>
        {isLoading && <h1>Now Loading...</h1>}
        <MoviesWrapper>
          {allMovies?.map((movie, idx) => (
            <Movie key={movie.imdb_code + idx} movie={movie} />
          ))}
        </MoviesWrapper>
      </InfiniteScroll>
    </Wrapper>
  );
};

export default MovieList;
