import React, { useState } from 'react'
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

export default function MoviesList({ movie }) {
    const { id, title, summary, medium_cover_image, rating } = movie

    return (
        <Wrapper>
            <MovieImg src={medium_cover_image} />
            <MovieDetails>
                <MovieTitle>{title}</MovieTitle>
                <MovieSummary>{summary}</MovieSummary>
            </MovieDetails>
            <MoviesMores>
                <MovieRating> ★{rating}</MovieRating>
                <Link href='/movie/[id]' as={`movie/${id}`}>
                    <Button key={id} width={'50px'}>
                        더보기
                    </Button>
                </Link>
            </MoviesMores>
        </Wrapper>
    )
}
