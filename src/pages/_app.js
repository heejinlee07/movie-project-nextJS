/* eslint-disable jsx-a11y/accessible-emoji */
import * as Sentry from '@sentry/react'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { Integrations } from '@sentry/tracing'
import Head from 'next/head'
import GlobalStyles from '../../styles/GlobalStyles'

const history = createBrowserHistory()

if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
    Sentry.init({
        enabled: process.env.NODE_ENV === 'production',
        dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
        integrations: [
            new Integrations.BrowserTracing({
                routingInstrumentation: Sentry.reactRouterV5Instrumentation(
                    history
                )
            })
        ],
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
            <Router history={history}>
                <Component {...pageProps} err={err} />
            </Router>
        </>
    )
}

export default Sentry.withProfiler(App)
