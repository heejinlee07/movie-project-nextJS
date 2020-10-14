import React, { useEffect, useState } from 'react'
import { getAllMovies } from '../services/movieApi'
import MovieList from '../components/movies/MovieList'

const MoviesContainer = () => {
    const [isLoading, setLoading] = useState(false)
    const [allMovies, setAllMovies] = useState([])
    const [page, setPage] = useState(1)
    const [sort, setSort] = useState('date_added')
    const [hasMore, setHasMore] = useState(true)

    useEffect(() => {
        const getMovieList = async () => {
            setLoading(true)
            const {
                data: {
                    data: { movies }
                }
            } = await getAllMovies(page, sort)
            setHasMore(!!movies.length)
            // setHasMore(page > 5 ? false : true);
            setAllMovies(_allMovies => _allMovies.concat(movies))
            setLoading(false)
        }
        getMovieList()
    }, [page, sort])

    return (
        <MovieList
            isLoading={isLoading}
            allMovies={allMovies}
            setAllMovies={setAllMovies}
            hasMore={hasMore}
            page={page}
            setPage={setPage}
            setSort={setSort}
        />
    )
}

export default MoviesContainer
