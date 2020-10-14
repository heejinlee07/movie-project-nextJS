/* eslint-disable jsx-a11y/accessible-emoji */
import Head from 'next/head'
import GlobalStyles from '../../styles/GlobalStyles'

const App = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <title>😀 movie page</title>
                <link
                    rel='shortcut icon'
                    href='../../public/favicon.ico'
                    type='image/x-icon'
                />
            </Head>
            <GlobalStyles />
            <Component {...pageProps} />
        </>
    )
}

export default App
