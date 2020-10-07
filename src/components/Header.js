import React from 'react'
import { HeaderWrapper } from './Header.styles'
import Link from 'next/link'
import Router from 'next/router'
import Button from '../components/common/Button'

function Header() {
    return (
        <div>
            <HeaderWrapper>
                <Link href='/'>
                    <Button padding={5} margin={'5px'}>
                        Home
                    </Button>
                </Link>
                <Link href='movies'>
                    <Button padding={5} margin={'5px'}>
                        Movies
                    </Button>
                </Link>
            </HeaderWrapper>
        </div>
    )
}

export default Header
