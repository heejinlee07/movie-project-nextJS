import React from "react";
import Link from "next/link";
import Button from "../common/Button";
import {
  Wrapper,
  MovieImg,
  MovieDetails,
  MovieTitle,
  MovieGenres,
  MovieYear,
  MovieSummary,
  MovieRating,
  MoviesWrapper,
  MoviesMores,
} from "./MoviesList.styles";
import TargetMovieModalContainer from "../../containers/TargetMovieModalContainer";

const MoviesList = ({ movie }) => {
  const {
    id,
    title,
    year,
    summary,
    medium_cover_image,
    rating,
    genres,
  } = movie;

  console.log(genres);
  const movieGenres = genres.join(" ");
  console.log(movieGenres);
  return (
    <Wrapper>
      <MovieImg
        src={medium_cover_image}
        alt="no image"
        onError={(e) =>
          (e.target.src =
            "https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101065/112815953-stock-vector-no-image-available-icon-flat-vector.jpg?ver=6")
        }
      />
      <MovieDetails>
        <MovieTitle>{title}</MovieTitle>
        <MovieGenres>{movieGenres}</MovieGenres>
        <MovieYear>{year}</MovieYear>
        <MovieSummary>{summary}</MovieSummary>
      </MovieDetails>
      <MoviesWrapper>
        <MovieRating> ★{rating}</MovieRating>
        <MoviesMores>
          <TargetMovieModalContainer id={id} />
          <Link href="/movie/[id]" as={`movie/${id}`} passHref>
            <Button key={id} width={"45px"}>
              더보기
            </Button>
          </Link>
        </MoviesMores>
      </MoviesWrapper>
    </Wrapper>
  );
};

export default MoviesList;
