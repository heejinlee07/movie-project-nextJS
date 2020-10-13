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
                <title>영화리스트</title>
            </Head>
            <Header />
            <Button fontSize={20} padding={10} bgColor={'green'}>
                {isSsr}
            </Button>
            {isSsr === 'server-side' && (
                <div style={{ widht: '200px', border: '1px solid black' }}>
                    {isSsrData}
                </div>
            )}
            {isSsr === 'client-side' && <MoviesContainer />}
        </>
    )
}

Movies.getInitialProps = async context => {
    console.log(context)
    const { req } = context
    //csr이면 undefined가 찍힘. ssr일 때 req가 요청한 것이니까.

    if (req) {
        console.log('serverside')
        console.log('req', req)
    } else {
        console.log('clientside')
    }
    //return 내용이 props로 전해진다. 위의 컴포넌트 함수에....

    const response = await fetch(`https://yts.mx/api/v2/list_movies.json`)
    const isSsrData = await response.json()

    return {
        isSsr: req ? 'server-side' : 'client-side',
        isSsrData: isSsrData.data.movies.map(m => m.title)
    }
}

export default Movies
