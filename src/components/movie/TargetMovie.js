import Button from '../common/button'
import { useRouter } from 'next/router'
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

const TargetMovie = ({ isLoading, detailMovie }) => {
    const router = useRouter()

    const {
        large_cover_image,
        title_long,
        like_count,
        download_count,
        description_full,
        rating
    } = detailMovie

    return (
        <>
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
                        <Button width={'70px'} onClick={() => router.back()}>
                            뒤로가기
                        </Button>
                    </MoviesMores>
                </Wrapper>
            )}
             
        </>
    )
}

export default TargetMovie