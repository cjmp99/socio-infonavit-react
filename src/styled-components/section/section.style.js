import styled from 'styled-components'

export const Section = styled.div`
    width: 50%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: ${props => props.background ? props.background : 'none'};
    color: #fff;
    text-align: center;
    font-size: ${props => props.font ? props.font : '16px'};

    @media (max-width: 978px){
        width: 100%;
        margin: auto;
    }
`;