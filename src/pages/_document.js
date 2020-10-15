/* eslint-disable jsx-a11y/accessible-emoji */
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

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
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
    (function(j,en,ni,fer) {
        j['dmndata']=[];j['jenniferFront']=function(args){window.dmndata.push(args)};
        j['dmnaid']=fer;j['dmnatime']=new Date();j['dmnanocookie']=false;j['dmnajennifer']='JENNIFER_FRONT@INTG';
        var b=Math.floor(new Date().getTime() / 60000) * 60000;var a=en.createElement(ni);
        a.src='https://d-collect.jennifersoft.com/'+fer+'/demian.js?'+b;a.async=true;
        en.getElementsByTagName(ni)[0].parentNode.appendChild(a);
    }(window,document,'script','1274b87d'));
`
                        }}
                    ></script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
