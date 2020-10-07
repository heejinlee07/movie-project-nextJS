import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Router from 'next/router'
import Header from '../components/Header'
import { getAllMovies } from '../services/movieApi'
import MoviesList from '../components/MoviesList'
import Button from '../components/common/Button'

export default function Movies() {
    const [isLoading, setLoading] = useState(false)
    const [movieList, setMovieList] = useState([])

    useEffect(() => {
        async function getMovieList() {
            setLoading(true)
            const {
                data: { data }
            } = await getAllMovies()
            console.log('data', data)
            console.log('data.movies', data.movies)
            setMovieList(data.movies)
            setLoading(false)
        }
        getMovieList()
    }, [])
    return (
        <div>
            <Header />
            <Button padding={5} margin={'5px'} onClick={() => Router.back()}>
                뒤로가기
            </Button>
            {isLoading && <h1>Now Loading...</h1>}
            {!isLoading &&
                movieList?.map(movie => (
                    <MoviesList key={movie.id} movie={movie} />
                ))}
        </div>
    )
}
