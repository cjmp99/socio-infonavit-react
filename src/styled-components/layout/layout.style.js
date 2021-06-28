import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: row;
`;

export const Sidebar = styled.div`
    width: ${props => props.switch ? props.switch : '25%'};
    height: 100vh;
    background: #EC5056;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    text-align: center;
    
    @media (max-width: 878px){
        width: 50%;
    }

    @media (max-width: 598px){
        width: 70%;
        position: fixed;
        left: 0;
    }
`;

export const Dashboard = styled.div`
    width: ${props => props.switch ? props.switch : '75%'};
    background: #F1F1F1;
    height: 100vh;
`;

export const Switch = styled.span`
    width: 100%;
    padding: 10px;
    position: fixed;
    top: 0;
    left: 0;
    color: #fff;
    cursor: pointer;
    background: #EC5056;
    z-index: 99999;
`;

export const Logout = styled.button`
    position: absolute;
    bottom: 0;
    border: none;
    color: #fff;
    background: none;
    font-size: 20px;
    margin-top: -20px;
    cursor: pointer;
`;

export const Label = styled.button`
  
    border: none;
    color: #fff;
    background: none;
    font-size: 20px;
    cursor: pointer;
`;

export const ContentImage = styled.div`
    width: 50%;
    margin: auto;
    margin-top: -40px;
`;