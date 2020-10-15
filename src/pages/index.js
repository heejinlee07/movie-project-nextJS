/* eslint-disable jsx-a11y/accessible-emoji */
import Head from 'next/head'
import Button from '../components/common/Button'
import Header from '../components/Header'
import { Wrapper, Introduce, List } from '../../styles/indexStyles'

const Index = ({ isSsr }) => {
    return (
        <>
            <Head>
                <meta name='description' content='메인페이지입니다.' />
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
            <Header />
            <Wrapper>
                <Introduce>사용된 라이브러리 및 프레임 워크</Introduce>
                <Button fontSize={20} padding={10} bgColor={'green'}>
                    {isSsr}
                </Button>
                <List>
                    <li>axios: ^0.20.0,</li>
                    <li>next: 9.5.3</li>
                    <li>react: 16.13.1</li>
                    <li>react-dom: 16.13.1</li>
                    <li>styled-components: ^5.2.0</li>
                    <li>styled-reset: ^4.2.3</li>
                    <li>react-infinite-scroll-component: ^5.1.0</li>
                    <li>@material-ui/core: ^4.11.0</li>
                    <li>@material-ui/icons: ^4.9.1</li>
                </List>
            </Wrapper>
        </>
    )
}

Index.getInitialProps = async context => {
    const { req } = context
    return { isSsr: req ? 'sever-side' : 'client-side' }
}

export default Index
