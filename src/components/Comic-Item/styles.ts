import styled, { keyframes } from 'styled-components';
import { scaleUpCenter } from '../../styles/animations';

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

    .rareItem {
        background-color: gold;
        box-shadow: 1px 1px 10px 5px;

        :hover {
            color: black;
            box-shadow: white 1px 1px 10px 5px;
        }
    }

    @media (max-width: 500px) {
        width: 300px;
        height: 500px;
    }
`;

export const WrapperBuy = styled.div`
    display: flex;
`;

export const Title = styled.h2`
    overflow: hidden;
    text-overflow: clip;
    height: 45px;
    margin: 0.5em;
    font-size: 1.1em;
    color: #f1c621;
    text-align: center;
    text-shadow: 1px 0 0 #203846, -1px 0 0 #203846, 0 1px 0 #203846,
        0 -1px 0 #203846, 1px 1px #203846, -1px -1px 0 #203846,
        1px -1px 0 #203846, -1px 1px 0 #203846;

    @media (max-width: 500px) {
        font-size: 1.2em;
    }

    a {
        text-decoration: none;
        all: unset;
        cursor: pointer;
        :hover {
            color: orange;
        }
    }
`;

export const Description = styled.p`
    color: white;
    font-weight: bold;
`;

export const Price = styled.p`
    margin: 0 10px 0 0;
    font-weight: bold;
    font-size: 1.8em;
    background: -webkit-linear-gradient(#14171a, #426b89);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

export const Img = styled.img`
    margin-top: -5px;
    width: 200px;
    height: 70%;
    box-shadow: 2px 2px 10px 2px;
    &:hover {
        animation: ${scaleUpCenter} 0.4s cubic-bezier(0.39, 0.575, 0.565, 1)
            both;
    }
    @media (max-width: 500px) {
        width: 300px;
        height: 80%;
    }
`;

export const Button = styled.button`
    all: unset;
    font-size: 14px;
    font-weight: bold;
    padding: 0.5em 0.5em;
    margin-bottom: 0.2em;
    background-color: #81343a;
    color: white;
    letter-spacing: 0.2em;
    border-radius: 5px;
    cursor: pointer;
`;
