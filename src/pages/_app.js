/* eslint-disable jsx-a11y/accessible-emoji */
import Head from 'next/head'
import GlobalStyles from '../../styles/GlobalStyles'

const App = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <title>😀 movie page</title>
            </Head>
            <GlobalStyles />
            <Component {...pageProps} />
        </>
    )
}

export default App
