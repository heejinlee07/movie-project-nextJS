/* eslint-disable jsx-a11y/accessible-emoji */
import * as Sentry from '@sentry/browser'
import { ServerStyleSheet } from 'styled-components'
import Document, { Html, Head, Main, NextScript } from 'next/document'

process.on('unhandledRejection', err => {
    Sentry.captureException(err)
})

process.on('uncaughtException', err => {
    Sentry.captureException(err)
})

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: App => props =>
                        sheet.collectStyles(<App {...props} />)
                })

            const initialProps = await Document.getInitialProps(ctx)
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                )
            }
        } finally {
            sheet.seal()
        }
    }

    render() {
        return (
            <Html lang='en'>
                <Head>
                    <meta name='description' content='메인페이지입니다' />
                    <meta
                        property='og:image'
                        content='https://developer.cdn.mozilla.net/static/img/opengraph-logo.dc4e08e2f6af.png'
                    />
                    <meta property='og:description' content='movie list page' />
                    <meta property='og:title' content='movie list page' />
                    <meta
                        name='sentry-trace'
                        content='{{ span.toTraceparent() }}'
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
