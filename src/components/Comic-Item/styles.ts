import styled, { keyframes } from 'styled-components';

const scaleUpCenter = keyframes`
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.1);
    }
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    margin: 1em;
    width: 200px;
    height: 400px;
    background-color: #ccc;
    border-radius: 1;
    box-sizing: content-box;
`;

export const WrapperTitle = styled.h2`
    overflow: hidden;
    text-overflow: clip;
    margin: 0.5em;
    font-size: 1.1em;
    color: yellow;
    text-align: center;
    text-shadow: black 1px 1.2px;
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
    text-shadow: black 1px 1px;
`;

export const WrapperImg = styled.img`
    margin-top: -5px;
    width: 200px;
    height: 70%;
    box-shadow: 2px 2px 10px 2px;
    &:hover{
        animation: ${scaleUpCenter} 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    }
`;

export const WrapperButton = styled.button`
    padding: 0.5em 4em;
    margin-bottom: 0.5em;
`;