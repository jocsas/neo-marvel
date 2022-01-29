import styled from 'styled-components';

export const Wrapper = styled.div`
    justify-content: space-between;
    border: 5px solid #ccc;
    margin: 1em;
    width: 250px;
    height: 400px;
    padding: 8px;
    border-radius: 8px;
    background-color: blue;
`;

export const WrapperTitle = styled.h2`
    margin: 0 0 0.5em 0;
    font-size: 1em;
    font-weight: bold;
    color: white;
`;

export const WrapperDescription = styled.a`
    color: blue;
    font-weight: bold;
`;

export const WrapperImg = styled.img`
    width: 100%;
    height: 80%;
`;
