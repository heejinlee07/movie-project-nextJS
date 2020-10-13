import MoviesContainer from '../containers/MoviesContainer'
import Head from 'next/head'
import Header from '../components/Header'
import Button from '../components/common/Button'

const Movies = ({ isSsr }) => {
    return (
        <>
            <Head>
                <title>영화리스트</title>
            </Head>
            <Header />
            <Button fontSize={20} padding={10} bgColor={'green'}>
                {isSsr}
            </Button>
            <MoviesContainer />
        </>
    )
}

Movies.getInitialProps = async context => {
    const { req } = context
    // console.log(context.req)
    //csr이면 undefined가 찍힘. ssr일 때 req가 요청한 것이니까.

    if (context.req) {
        console.log('serverside')
    } else {
        console.log('clientside')
    }

    return { isSsr: req ? 'sever-side' : 'client-side' }
}

export default Movies
