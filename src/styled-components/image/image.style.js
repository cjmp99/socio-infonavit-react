import styled from 'styled-components'

export const Img = styled.img`
    width: 300px;
    object-fit: cover;
    margin: auto;
    display: flex;
    justify-content: center;

    @media (max-width: 498px){
        width: 200px;
    }
`