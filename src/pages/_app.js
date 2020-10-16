/* eslint-disable jsx-a11y/accessible-emoji */
import * as Sentry from '@sentry/react'
import { Integrations } from '@sentry/tracing'
import Head from 'next/head'
import GlobalStyles from '../../styles/GlobalStyles'

if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
    Sentry.init({
        dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
        integrations: [new Integrations.BrowserTracing()],
        tracesSampleRate: 1.0
    })
}

const App = ({ Component, pageProps, err }) => {
    return (
        <>
            <Head>
                <title>😀 movie page</title>
                <meta
                    name='sentry-trace'
                    content='{{ span.toTraceparent() }}'
                />
            </Head>
            <GlobalStyles />
            <Component {...pageProps} err={err} />
        </>
    )
}

export default Sentry.withProfiler(App)
