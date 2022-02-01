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
    width: 100%;
    height: calc(100vh - 50px);
    background: #352F32;
`;

export const WrapperComic = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    margin: auto;
    width: 100%;
    background-color: #352F32;

    @media (max-width: 500px) {
        width: 300px;
        height: 500px;
    }

    `;

export const Title = styled.h2`
    margin: 0.5em;
    font-size: 1.1em;
    color: yellow;
    text-align: center;
    text-shadow: black 1px 1.2px;
    
    a {
        text-decoration: none;
        all: unset;
        cursor: pointer;
    }
    `;

export const Description = styled.p`
    color: white;
    font-weight: bold;
`;

export const Price = styled.p`
    margin-top: 0;
    font-weight: bold;
    font-size: 1.3em;
    color: white;
    text-shadow: black 1px 1px;
`;

export const Img = styled.img`
    width: 500px;
    height: 400px;
    box-shadow: 2px 2px 10px 2px;
    &:hover{
        animation: ${scaleUpCenter} 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    }
    @media (max-width: 500px) {
        width: 300px;
        height: 80%;
    }
`;