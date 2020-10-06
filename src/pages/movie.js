import React, { useState, useEffect } from 'react'
import { getDetailMovies } from '../services/movieApi'

function movie() {
    const [isLoading, setLoading] = useState(false)
    const [movieList, setMovieList] = useState([])

    useEffect(() => {
        async function getDetailList() {
            setLoading(true)
            const {
                data: { data }
            } = await getDetailMovies()
            console.log('data', data)
            console.log('data.movies', data.movies)
            setMovieList(data.movies)
            setLoading(false)
        }
        getDetailList()
    }, [])
    return <div>hi</div>
}

export default movie
