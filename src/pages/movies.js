import { useEffect, useState } from "react";
import styled from "styled-components";
import Head from "next/head";
import { useRouter } from "next/router";
import InfiniteScroll from "react-infinite-scroll-component";
import { getAllMovies } from "../services/movieApi";
import MoviesList from "../components/movies/MoviesList";
import Header from "../components/Header";
import Button from "../components/common/Button";
import MoviesContainer from "../containers/MoviesContainer";

const Wrapper = styled.div`
  overflow-y: hidden;

  &::-webkit-scrollbar {
    display: none;
  }
`;
const ButtonList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

const MoviesWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

/*{
  isLoading,
  allMovies,
  setAllMovies,
  hasMore,
  page,
  setPage,
  setSort,
}
*/

const Movies = () => {
  return (
    <>
      <Head>
        <title>영화리스트</title>
      </Head>
      <Wrapper>
        <MoviesContainer />
        {/* <Header />
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
          {allMovies?.map((movie) => (
            <MoviesWrapper>
              <MoviesList key={movie.id} movie={movie} />
            </MoviesWrapper>
          ))}
        </InfiniteScroll> */}
      </Wrapper>
    </>
  );
};

export default Movies;
