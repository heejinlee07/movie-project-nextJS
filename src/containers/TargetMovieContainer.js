import { useState, useEffect } from "react";
import { getDetailMovies } from "../services/movieApi";
import TargetMovie from "../components/Movie/TargetMovie";
import MovieModal from "../components/common/MovieModal/MovieModal";

const TargetMovieContainer = ({ id, type = "page", isOpen, setOpen }) => {
  const [isLoading, setLoading] = useState(false);
  const [detailMovie, setDetailMovie] = useState([]);

  useEffect(() => {
    const getDetailList = async () => {
      setLoading(true);
      const {
        data: {
          data: { movie },
        },
      } = await getDetailMovies(id);
      setDetailMovie(movie);
      setLoading(false);
    };

    if (id) getDetailList();
  }, [id]);

  return (
    <div>
      {type === "page" && (
        <TargetMovie detailMovie={detailMovie} isLoading={isLoading} />
      )}
      {type === "modal" && (
        <MovieModal
          detailMovie={detailMovie}
          isLoading={isLoading}
          isOpen={isOpen}
          setOpen={setOpen}
        />
      )}
    </div>
  );
};

export default TargetMovieContainer;
