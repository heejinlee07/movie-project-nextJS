import Header from '../components/Header'
import { Wrapper, Introduce, List } from './index.styles'

export default function Index() {
    return (
        <>
            <Header />
            <Wrapper>
                <Introduce>사용된 라이브러리 및 프레임 워크</Introduce>
                <List>
                    <li>axios: ^0.20.0,</li>
                    <li>lamport: ^0.0.0</li>
                    <li>left-pad: ^1.3.0</li>
                    <li>lodash: ^4.17.20</li>
                    <li>next: 9.5.3</li>
                    <li>react: 16.13.1</li>
                    <li>react-dom: 16.13.1</li>
                    <li>styled-components: ^5.2.0</li>
                    <li>styled-reset: ^4.2.3</li>
                    <li>react-infinite-scroll-component: ^5.1.0</li>
                </List>
            </Wrapper>
        </>
    )
}
