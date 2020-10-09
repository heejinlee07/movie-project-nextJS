import Api from "./api";

// 전체 영화 가져오기
export const getAllMovies = (page, sort) => {
  return Api.get(`/list_movies.json?page=${page}&limit=4&sort_by=${sort}`);
};

//특정 영화 가져오기
export const getDetailMovies = (id) => {
  return Api.get(`/movie_details.json?movie_id=${id}`);
};
