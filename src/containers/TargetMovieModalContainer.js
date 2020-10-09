import { useState, useEffect } from "react";
import { getDetailMovies } from "../services/movieApi";
import Modal from "../components/common/MovieModal/MovieModal";

const TargetMovieModalContainer = ({ id }) => {
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
      <Modal detailMovie={detailMovie} isLoading={isLoading} />
    </div>
  );
};

export default TargetMovieModalContainer;
