import { useEffect, useState } from "react";
import styled from "styled-components";
import Head from "next/head";
import InfiniteScroll from "react-infinite-scroll-component";
import { useRouter } from "next/router";
import Header from "../components/Header";
import { getAllMovies } from "../services/movieApi";
import MoviesList from "../components/movies/MoviesList";
import Button from "../components/common/Button";

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

const Movies = () => {
  const [isLoading, setLoading] = useState(false);
  const [allMovies, setAllMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("date_added");

  const router = useRouter();

  useEffect(() => {
    const getMovieList = async () => {
      setLoading(true);
      const {
        data: {
          data: { movies },
        },
      } = await getAllMovies(page, sort);
      setAllMovies((_allMovies) => _allMovies.concat(movies));
      setLoading(false);
    };
    getMovieList();
  }, [page, sort]);

  const getNextMovies = () => {
    setPage(page + 1);
  };

  const sortedMovies = (sort) => {
    setAllMovies([]);
    setSort(sort);
  };

  return (
    <>
      <Head>
        <title>영화리스트</title>
      </Head>
      <Wrapper>
        <Header />
        <InfiniteScroll
          dataLength={allMovies.length}
          next={getNextMovies}
          loader={<h1>is Loading...</h1>}
          inverse={false}
          hasMore={true}
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
        </InfiniteScroll>
      </Wrapper>
    </>
  );
};

export default Movies;
