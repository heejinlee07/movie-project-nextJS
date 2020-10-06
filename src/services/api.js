import axios from 'axios'

export const listApi = axios.create({
    baseURL: 'https://yts.mx/api/v2/list_movies.json'
})

export const detailApi = axios.create({
    baseURL: 'https://yts.mx/api/v2/movie_details.json'
})
