import React from 'react'
import { ButtonUi } from './Button.styles'

const Button = ({ children, ...rest }) => {
    return <ButtonUi {...rest}>{children}</ButtonUi>
}

export default Button
