import { useState, useEffect } from 'react'
import { getDetailMovies } from '../services/movieApi'
import TargetMovie from '../components/movie/TargetMovie'

const TargetMovieContainer = ({ id }) => {
    const [isLoading, setLoading] = useState(false)
    const [detailMovie, setDetailMovie] = useState([])

    useEffect(() => {
        const getDetailList = async () => {
            setLoading(true)
            const {
                data: {
                    data: { movie }
                }
            } = await getDetailMovies(id)
            setDetailMovie(movie)
            // console.log('44', detailMovie)
            setLoading(false)
        }

        if (id) getDetailList()
    }, [id])

    return (
        <div>
            <TargetMovie detailMovie={detailMovie} isLoading={isLoading} />
        </div>
    )
}

export default TargetMovieContainer
