import React from 'react'
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

export default function MoviesList({ movie }) {
    console.log('homemoive', movie)
    const { id, title, summary, medium_cover_image, rating } = movie
    return (
        <Wrapper>
            <MovieImg src={medium_cover_image} />
            <MovieDetails>
                <MovieTitle>{title}</MovieTitle>
                <MovieSummary>{summary}</MovieSummary>
            </MovieDetails>
            <MoviesMores>
                <MovieRating>{rating}</MovieRating>
                <Button
                    key={id}
                    width={'50px'}
                    onClick={e => {
                        getDetailMovies(id)
                    }}
                >
                    더보기
                </Button>
            </MoviesMores>
        </Wrapper>
    )
}
