// import React from "react";
import LinkButton from '../common/LinkButton'
import { HeaderWrapper } from './HeaderStyles'

const Header = () => {
    return (
        <HeaderWrapper>
            <LinkButton href='/'>Home</LinkButton>
            <LinkButton href='/movies'>Movies</LinkButton>
        </HeaderWrapper>
    )
}

export default Header
