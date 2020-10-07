import React, { useState, useEffect } from 'react'
import Button from '../components/common/Button'
import Router from 'next/router'
import { getDetailMovies } from '../services/movieApi'
import {
    Wrapper,
    MovieImg,
    MovieDetails,
    MovieTitle,
    MovieCount,
    MovieLike,
    MovieDownload,
    MovieSummary,
    MoviesMores,
    MovieRating
} from './TargetMovie.styles'

function TargetMovie({ id }) {
    // console.log(targetedId)
    const [isLoading, setLoading] = useState(false)
    const [detailMovieList, setDetailMovieList] = useState([])

    useEffect(() => {
        async function getDetailList() {
            setLoading(true)
            const {
                data: { data }
            } = await getDetailMovies(id)
            console.log('targetdata', data)
            setDetailMovieList(data?.movie)
            setLoading(false)
        }
        getDetailList()
    }, [])

    const {
        large_cover_image,
        title_long,
        like_count,
        download_count,
        description_full,
        rating
    } = detailMovieList

    return (
        <>
            <Button padding={5} margin={'5px'} onClick={() => Router.back()}>
                뒤로가기
            </Button>
            {isLoading && <h1>Now Loading...</h1>}
            {!isLoading && (
                <Wrapper>
                    <MovieImg src={large_cover_image} />
                    <MovieDetails>
                        <MovieTitle>{title_long}</MovieTitle>
                        <MovieCount>
                            <MovieLike>Like 👍 : {like_count}</MovieLike>
                            <MovieDownload>
                                Download 💙 : {download_count}
                            </MovieDownload>
                        </MovieCount>
                        <MovieSummary>{description_full}</MovieSummary>
                    </MovieDetails>
                    <MoviesMores>
                        <MovieRating> ★ {rating}</MovieRating>
                    </MoviesMores>
                </Wrapper>
            )}
        </>
    )
}

export default TargetMovie
