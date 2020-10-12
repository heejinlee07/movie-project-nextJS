import React from 'react'
import Link from 'next/link'
import { LinkAnchor } from './LinkButton.styles'

const LinkButton = React.forwardRef(
    ({ onClick, as, href, children, ...rest }, ref) => {
        return (
            <Link href={href} as={as}>
                <LinkAnchor href={href} onClick={onClick} ref={ref} {...rest}>
                    {children}
                </LinkAnchor>
            </Link>
        )
    }
)
export default LinkButton
