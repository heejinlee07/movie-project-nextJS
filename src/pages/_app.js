/* eslint-disable jsx-a11y/accessible-emoji */
import Head from "next/head";
import GlobalStyles from "../../styles/GlobalStyles";

const App = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <title>😀 movie page</title>
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
`,
                    }}
                ></script>
            </Head>
            <GlobalStyles />
            <Component {...pageProps} />
        </>
    );
};

export default App;
