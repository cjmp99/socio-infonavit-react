import styled from 'styled-components'

export const Button = styled.input`
    width: 100%;
    outline: none;
    border: none;
    border-radius: 20px;
    background: ${props => props.background ? props.background : '#EC5056'};
    margin-top: 50px;
    padding: 5px;
    color: #fff;
    cursor: pointer;
    font-size: 20px;
    transition: .2s ease-in all;

    :hover{
        transition: .2s ease-in all;
        background: ${props => props.background ? props.background : 'rgba(236,86,80,0.6)'};
    }
`