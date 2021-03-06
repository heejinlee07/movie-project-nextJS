import { useState } from 'react'
import TargetMovieContainer from '../../containers/TargetMovieContainer'
import Button from '../common/Button'
import {
    Wrapper,
    MovieImg,
    MovieDetails,
    MovieTitle,
    GenreList,
    MovieGenre,
    MovieYear,
    MovieSummary,
    MovieRating,
    MoviesWrapper,
    MoviesMores
} from './MovieStyles'
import LinkButton from '../common/LinkButton'

const Movie = ({ movie }) => {
    const {
        id,
        title,
        year,
        summary,
        medium_cover_image,
        rating,
        genres
    } = movie

    const [isOpen, setOpen] = useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }

    return (
        <>
            <Wrapper>
                <MovieImg
                    src={medium_cover_image}
                    alt='no image'
                    onError={e => {
                        e.target.src =
                            'https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101065/112815953-stock-vector-no-image-available-icon-flat-vector.jpg?ver=6'
                        e.target.style = 'object-fit: cover'
                    }}
                />
                <MovieDetails>
                    <MovieTitle>{title}</MovieTitle>
                    <GenreList>
                        {genres?.map(genre => (
                            <MovieGenre key={genre}>{genre}</MovieGenre>
                        ))}
                    </GenreList>
                    <MovieYear>{year}</MovieYear>
                    <MovieSummary>{summary}</MovieSummary>
                </MovieDetails>
                <MoviesWrapper>
                    <MovieRating> ★{rating}</MovieRating>
                    <MoviesMores>
                        <Button
                            onClick={handleClickOpen}
                            height={'30px'}
                            borderRadius={5}
                        >
                            modal
                        </Button>
                        <LinkButton
                            href='/movie/[id]'
                            as={`movie/${id}`}
                            width={80}
                        >
                            더보기
                        </LinkButton>
                    </MoviesMores>
                </MoviesWrapper>
            </Wrapper>
            {isOpen && (
                <TargetMovieContainer
                    id={id}
                    type='modal'
                    isOpen={isOpen}
                    setOpen={setOpen}
                />
            )}
        </>
    )
}

export default Movie
