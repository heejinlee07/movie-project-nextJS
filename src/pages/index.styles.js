import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Introduce = styled.h2`
    font-weight: 700;
    margin: 20px 0;
`

export const List = styled.ul`
    & > * {
        padding: 5px;
    }
`
