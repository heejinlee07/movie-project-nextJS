import { useRouter } from 'next/router'
import styled from 'styled-components'
import Head from 'next/head'
import Header from '../../../components/header'
import TargetMovie from '../../../containers/TargetMovie'

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 30px;
`

export default function Index() {
    const router = useRouter()
    const { id } = router.query

    return (
        <>
            <Head>
                <title>영화 {id}</title>
            </Head>
            <Header />
            <Wrapper>
                <TargetMovie id={id} />
            </Wrapper>
        </>
    )
}
