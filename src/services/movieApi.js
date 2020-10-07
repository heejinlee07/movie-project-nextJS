import { listApi, detailApi } from './api'

// 전체 영화 가져오기
export const getAllMovies = page => {
    return listApi.get(`?page=${page}&limit=4`)
}

//특정 영화 가져오기
export const getDetailMovies = id => {
    return detailApi.get(`?movie_id=${id}`)
}
