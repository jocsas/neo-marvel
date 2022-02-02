import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    padding: 30px 30px;
    background: #352f32;
`;

export const WrapperComic = styled.div`
    display: flex;
    width: 100%;

    @media (max-width: 768px) {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
`;

export const WrapperInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 4em;

    @media (max-width: 768px) {
        padding: 0;
    }
`;

export const Title = styled.h2`
    margin: 1em;
    font-size: 2em;
    color: gold;
    text-align: left;
    text-shadow: black 1px 1.2px;
    letter-spacing: 0.1em;
`;

export const Description = styled.p`
    color: white;
    margin: 2em;
    font-size: 1.1em;
    line-height: 1.5em;
`;

export const Img = styled.img`
    width: 400px;
    height: 600px;
    box-shadow: 2px 2px 10px 2px;
`;

export const Button = styled.button`
    margin: 0 2em;
    font-size: 1em;
    font-weight: bold;
    color: black;
    background-color: white;
    border-radius: 5px;
    padding: 5px;
    cursor: pointer;
    border: 1px solid black;

    :hover {
        background-color: gold;
        color: black;
        border: 1px solid #c07d07;
    }
`;
