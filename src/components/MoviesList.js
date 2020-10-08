import React from 'react'
import Link from 'next/link'
import Button from './common/Button'
import {
    Wrapper,
    MovieImg,
    MovieDetails,
    MovieTitle,
    MovieYear,
    MovieSummary,
    MovieRating,
    MoviesMores
} from './MoviesList.styles'

export default function MoviesList({ movie }) {
    const { id, title, year, summary, medium_cover_image, rating } = movie

    return (
        <Wrapper>
            {medium_cover_image ? <MovieImg src={medium_cover_image} /> : ''}
            <MovieDetails>
                <MovieTitle>{title}</MovieTitle>
                <MovieYear>{year}</MovieYear>
                <MovieSummary>{summary}</MovieSummary>
            </MovieDetails>
            <MoviesMores>
                <MovieRating> ★{rating}</MovieRating>
                <Link href='/movie/[id]' as={`movie/${id}`} passHref>
                    <Button key={id} width={'45px'}>
                        더보기
                    </Button>
                </Link>
            </MoviesMores>
        </Wrapper>
    )
}
