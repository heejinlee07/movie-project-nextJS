import React from 'react'
import GlobalStyles from '../../styles/GlobalStyles'

const App = ({ Component, pageProps }) => {
    return (
        <>
            <GlobalStyles />
            <Component {...pageProps} />
        </>
    )
}

export default App
