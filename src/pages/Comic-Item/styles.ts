import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 1em;
    width: 250px;
    height: 400px;
    padding: 8px;
`;

export const WrapperTitle = styled.h2`
    margin: 5px;
    font-size: 1.1em;
    color: yellow;
    text-align: center;
    text-shadow: black 1px 1.2px ;
`;

export const WrapperDescription = styled.p`
    color: white;
    font-weight: bold;
`;

export const WrapperPrice = styled.p`
    margin-top: 0;
    font-weight: bold;
    font-size: 1.3em;
    color: white;
    text-shadow: black 1px 1px ;
    
`;

export const WrapperImg = styled.img`
    width: 100%;
    height: 80%;
    border-radius: 5px 0px 0px 5px;
    box-shadow: 2px 2px 10px 2px;

    :hover {
        transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
        transform: rotate(5deg);
        }
`;
