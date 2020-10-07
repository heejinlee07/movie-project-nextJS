import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import InfiniteScroll from 'react-infinite-scroll-component'

import Router from 'next/router'
import Header from '../components/Header'
import { getAllMovies } from '../services/movieApi'
import MoviesList from '../components/MoviesList'
import Button from '../components/common/Button'

export default function Movies() {
    const [isLoading, setLoading] = useState(false)
    const [movieList, setMovieList] = useState([])
    const [page, setPage] = useState(1)
    /*
     내릴 때마다 페이지 번호를 바꾼다.
     스크롤 내릴때마다 setState로 바꿔줄것.

    useEffect(API 호출해서 지금 가지고 있는 영화 리스트 목록에 추가해주면 되겠다.
    setState(movielist.concat(data)) 뭐 이런식으로)
    query로 넣자
    page,setPage(usestate1)
    next -setpage(page+1)
    next는 prop이니까 next={() => setPage(page + 1)}
    setMovieList(movieList => movieList.concat(data)) 뭐 이런식으로 하면 되거지

     */

    useEffect(() => {
        async function getMovieList() {
            setLoading(true)
            const {
                data: { data }
            } = await getAllMovies(page)
            console.log('data', data)
            console.log('data.movies', data.movies)
            setMovieList(data.movies)
            // setMovieList(movieList => movieList.concat(data))
            setLoading(false)
        }
        getMovieList()
    }, [page])

    return (
        <div>
            <Header />
            <InfiniteScroll
                dataLength={movieList.length}
                next={() => setPage(page + 1)}
                loader={<h1>is Loading...</h1>}
                inverse={false}
                hasMore={true}
            >
                <Button
                    padding={5}
                    margin={'5px'}
                    onClick={() => Router.back()}
                >
                    뒤로가기
                </Button>
                {isLoading && <h1>Now Loading...</h1>}
                {!isLoading &&
                    movieList?.map(movie => (
                        <MoviesList key={movie.id} movie={movie} />
                    ))}
            </InfiniteScroll>
        </div>
    )
}
