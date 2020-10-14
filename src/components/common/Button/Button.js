import React from 'react'
import { ButtonUi } from './ButtonStyles'

const Button = ({ children, ...rest }) => {
    return <ButtonUi {...rest}>{children}</ButtonUi>
}

export default Button
