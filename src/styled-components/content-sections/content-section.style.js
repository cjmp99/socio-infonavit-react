import styled from 'styled-components'

export const ContentSections = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    @media (max-width: 978px){
        flex-direction: column;
    }
`;