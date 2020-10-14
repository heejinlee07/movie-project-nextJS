import styled from 'styled-components'

export const LinkAnchor = styled.a`
    margin: ${props => props.margin || 10}px;
    text-align: center;
    padding: ${props => props.padding || 5}px;
    border-radius: ${props => props.radius || 5}px;
    width: ${props => props.width}px;
    background-color: grey;
    color: white;

    &:hover {
        background-color: black;
        color: white;
    }
`
