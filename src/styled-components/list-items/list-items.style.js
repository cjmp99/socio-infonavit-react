import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 90vh;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    margin-top: 60px;
`;

export const Data = styled.div`
    width: 100%;
    text-align: center;
`;

export const Card = styled.div`
    width: ${props => props.width ? props.width : '300px'};
    height: ${props => props.width ? props.width : '200px'};
    margin-left: 20px;
    border-radius: 3px;
    color: #000;
    cursor: pointer;
    transition: .3s all ease-in-out;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    background: #fff;
    overflow: auto;

    :hover{
        box-shadow: 2px 2px 7px #494949;
        transition: .3s all ease-in-out;
    }

    @media (max-width: 978px){
        width: 80%;
        margin: auto;
        margin-top: 20px;
    }
`;

export const SkeletonCard = styled.div`
    width: ${props => props.width ? props.width : '300px'};
    height: ${props => props.width ? props.width : '200px'};
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    background: #fff;
    padding: 5px;
    margin: 5px;
`;

export const ContentSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    margin: auto;
`

export const Image = styled.img`
    width: 100px;
    margin: auto;
`;

export const Button = styled.button`
    width: 80%;
    margin: auto;
    background: #EC5056;
    outline: none;
    border-radius: 5px;
    padding: 8px;
    border: none;
    color: #fff;
    cursor: pointer;
    font-size: 20px;
`;