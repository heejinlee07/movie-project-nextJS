import Head from "next/head";
import Header from "../components/Header";
import MoviesContainer from "../containers/MoviesContainer";

const Movies = () => {
  return (
    <>
      <Head>
        <title>영화리스트</title>
      </Head>
      <Header />
      <MoviesContainer />
    </>
  );
};

export default Movies;
