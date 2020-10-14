import React, { forwardRef } from 'react'
import Link from 'next/link'
import { LinkAnchor } from './LinkButtonStyles'

const LinkButton = forwardRef(
    ({ onClick, as, href, children, passHref, ...rest }, ref) => {
        return (
            <Link href={href} as={as} passHref={passHref}>
                <LinkAnchor onClick={onClick} ref={ref} {...rest}>
                    {children}
                </LinkAnchor>
            </Link>
        )
    }
)
export default LinkButton
