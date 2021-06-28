import styled from 'styled-components'

export const FormStyle = styled.form`
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    margin: auto;

    @media (max-width: 978px){
        width: 80%;
        margin: auto;
    }
`