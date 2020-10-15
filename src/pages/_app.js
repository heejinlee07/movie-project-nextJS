/* eslint-disable jsx-a11y/accessible-emoji */
import * as Sentry from '@sentry/react'
import { Integrations } from '@sentry/tracing'
import Head from 'next/head'
import GlobalStyles from '../../styles/GlobalStyles'

/**
 * @todo
 * https://docs.sentry.io/platforms/javascript/guides/react/configuration/integrations/react-router/
 * add transaction
 */

if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
    Sentry.init({
        enabled: process.env.NODE_ENV === 'production',
        dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
        integrations: [new Integrations.BrowserTracing()]
    })
}

export function reportWebVitals(metric) {
    // console.log(metric)
}

const App = ({ Component, pageProps, err }) => {
    return (
        <>
            <Head>
                <title>😀 movie page</title>
                {/* <script
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
                ></script> */}
            </Head>
            <GlobalStyles />
            <Component {...pageProps} err={err} />
        </>
    )
}

export default Sentry.withProfiler(App)
