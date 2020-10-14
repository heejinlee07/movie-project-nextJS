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
    console.log('[targetSsrData]', targetSsrData)

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
                {isSsr === true ? 'server-side' : 'client-side'}
            </Button>
            {isSsr && (
                <Wrapper>
                    <div>{targetSsrData.data.movie.id}</div>
                    <div>{targetSsrData.data.movie.title}</div>
                </Wrapper>
            )}
            {!isSsr && (
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

        const isSsr = true
        const response = await fetch(
            `https://yts.mx/api/v2/movie_details.json?movie_id=${query.id}`
        )
        const targetSsrData = await response.json()

        return { isSsr, targetSsrData }
    } else {
        const isSsr = false
        console.log('clientside')
        return { isSsr }
    }
}

export default Index
