import { useRouter } from 'next/router'
import Button from '../../../components/common/Button'
import styled from 'styled-components'
import Head from 'next/head'
import Header from '../../../components/Header'
import TargetMovieContainer from '../../../containers/TargetMovieContainer'

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 30px;
`

const Index = ({ isSsr, targetSsrData }) => {
    console.log('[isSsr]', isSsr)
    console.log('[isSsrData]', targetSsrData)

    const router = useRouter()
    console.log('[router]', router)

    const { id } = router.query

    return (
        <>
            <Head>
                <title>영화 {id}</title>
            </Head>
            <Header />
            <Button fontSize={20} padding={10} bgColor={'green'}>
                {isSsr}
            </Button>
            {isSsr === 'server-side' && (
                <Wrapper>
                    <div>{targetSsrData.data.movie.id}</div>
                    <div>{targetSsrData.data.movie.title}</div>
                </Wrapper>
            )}
            {isSsr === 'client-side' && (
                <Wrapper>
                    <TargetMovieContainer id={id} type='page' />
                </Wrapper>
            )}
        </>
    )
}

Index.getInitialProps = async context => {
    console.log(context)
    const { req, query } = context

    if (req) {
        console.log('serverside')
        console.log('req', req)
        console.log('req', query)
    } else {
        console.log('clientside')
    }

    const response = await fetch(
        `https://yts.mx/api/v2/movie_details.json?movie_id=${query.id}`
    )
    const targetSsrData = await response.json()

    return {
        isSsr: req ? 'server-side' : 'client-side',
        targetSsrData
    }
}

export default Index
