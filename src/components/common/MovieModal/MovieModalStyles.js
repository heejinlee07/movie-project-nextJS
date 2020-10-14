import styled from 'styled-components'

export const MovieWrapper = styled.div`
    display: flex;
    justify-content: center;
`

export const MoviePoster = styled.img`
    border-radius: 20px;
    padding: 10px;
    height: 350px;
    max-width: 40%;
`

export const MovieDetail = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;

    & > div {
        margin: 5px;
    }
`
export const MovieSummary = styled.div`
    margin-top: 15px;
`

export const MovieLike = styled.div``

export const MovieDownload = styled.div``

export const MovieRating = styled.div`
    margin-bottom: 20px;
`
export const LoadingMessage = styled.div`
    height: 300px;
    line-height: 300px;
    width: 300px;
    text-align: center;
`
