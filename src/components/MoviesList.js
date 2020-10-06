import React, { useState, useEffect } from 'react'
import Router, { useRouter } from 'next/router'
import Link from 'next/link'
import Button from './common/Button'
import {
    Wrapper,
    MovieImg,
    MovieDetails,
    MovieTitle,
    MovieSummary,
    MovieRating,
    MoviesMores
} from './MoviesList.styles'
import { getDetailMovies } from '../services/movieApi'
import TargetMovie from './TargetMovie'

export default function MoviesList({ movie }) {
    // console.log('homemoive', movie)
    const { id, title, summary, medium_cover_image, rating } = movie

    const [isLoading, setLoading] = useState(false)
    const [movieList, setMovieList] = useState([])

    useEffect(() => {
        async function getDetailList() {
            setLoading(true)
            const data = await targetedId()
            console.log('data', data)
            // console.log('data.movies', data.movies)
            // setMovieList(data.movies)
            setLoading(false)
        }
        getDetailList()
    }, [])

    const targetedId = target => {
        console.log('target', target)
        getDetailMovies(target)
    }

    const router = useRouter()

    return (
        <Wrapper>
            <MovieImg src={medium_cover_image} />
            <MovieDetails>
                <MovieTitle>{title}</MovieTitle>
                <MovieSummary>{summary}</MovieSummary>
            </MovieDetails>
            <MoviesMores>
                <MovieRating>{rating}</MovieRating>
                <Link href='/movie/[id]' as={`/movie/?movie_id=${id}`}>
                    <Button
                        key={id}
                        width={'50px'}
                        onClick={() => {
                            targetedId(id)
                            Router.push(`/movie/${id}`)
                        }}
                    >
                        더보기
                    </Button>
                </Link>
                <TargetMovie />
            </MoviesMores>
        </Wrapper>
    )
}
