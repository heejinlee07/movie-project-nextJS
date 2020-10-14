/* eslint-disable jsx-a11y/accessible-emoji */
import MoviesContainer from '../containers/MoviesContainer'
import fetch from 'isomorphic-unfetch'
import Head from 'next/head'
import Header from '../components/Header'
import Button from '../components/common/Button'

const Movies = ({ isSsr, isSsrData }) => {
    console.log('[isSsr]', isSsr)
    console.log('[isSsrData]', isSsrData)

    return (
        <>
            <Head>
                <title> 🎫 영화리스트</title>
                <meta name='description' content='영화 리스트 페이지입니다.' />
            </Head>
            <Header />
            <Button fontSize={20} padding={10} bgColor={'green'}>
                {isSsr === true ? 'server-side' : 'client-side'}
            </Button>
            {isSsr && (
                <>
                    {isSsrData.map(a => (
                        <div key={a.id}>
                            <div>{a.title}</div>
                            <div>{a.rating}</div>
                        </div>
                    ))}
                </>
            )}
            {!isSsr && <MoviesContainer />}
        </>
    )
}

Movies.getInitialProps = async context => {
    console.log(context)
    const { req } = context

    if (req) {
        console.log('serverside')
        console.log('req', req)
        const isSsr = true
        const response = await fetch('https://yts.mx/api/v2/list_movies.json')
        const isSsrData = await response.json()

        return {
            isSsr,
            isSsrData: isSsrData.data.movies.map(movie => movie)
        }
    } else {
        const isSsr = false
        console.log('clientside')
        return { isSsr }
    }
}

export default Movies
