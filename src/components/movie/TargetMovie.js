/* eslint-disable jsx-a11y/accessible-emoji */
import Button from "../common/Button";
import { useRouter } from "next/router";
import {
  Wrapper,
  MovieImg,
  MovieDetails,
  MovieTitle,
  MovieCount,
  MovieLike,
  MovieDownload,
  MovieSummary,
  MoviesMores,
  MovieRating,
} from "./TargetMovie.styles";

const TargetMovie = ({ isLoading, detailMovie }) => {
  const router = useRouter();

  const {
    large_cover_image,
    title_long,
    like_count,
    download_count,
    description_full,
    rating,
  } = detailMovie;

  return (
    <>
      {isLoading && <h1>Now Loading...</h1>}
      {!isLoading && (
        <Wrapper>
          <MovieImg
            src={large_cover_image}
            onError={(e) =>
              (e.target.src =
                "https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101065/112815953-stock-vector-no-image-available-icon-flat-vector.jpg?ver=6")
            }
          />
          <MovieDetails>
            <MovieTitle>{title_long}</MovieTitle>
            <MovieCount>
              <MovieLike>Like 👍 : {like_count}</MovieLike>
              <MovieDownload>Download 💙 : {download_count}</MovieDownload>
            </MovieCount>
            <MovieSummary>{description_full}</MovieSummary>
          </MovieDetails>
          <MoviesMores>
            <MovieRating> ★ {rating}</MovieRating>
            <Button width={"70px"} onClick={() => router.back()}>
              뒤로가기
            </Button>
          </MoviesMores>
        </Wrapper>
      )}
       
    </>
  );
};

export default TargetMovie;
