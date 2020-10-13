import { useRouter } from 'next/router'
import styled from 'styled-components'
import Head from 'next/head'
import Header from '../../../components/Header'
import TargetMovieContainer from '../../../containers/TargetMovieContainer'

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 30px;
`

const Index = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <>
            <Head>
                <title>영화 {id}</title>
            </Head>
            <Header />
            <Wrapper>
                <TargetMovieContainer id={id} type='page' />
            </Wrapper>
        </>
    )
}

export default Index
