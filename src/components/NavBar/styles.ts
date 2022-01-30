import styled from 'styled-components';

export const Wrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em 5em;
    background-color: black;
    color: white;

    a {
        text-decoration: none;
        color: white;
    }

    input {
        font-weight: bold;
        font-size: 1.2em;
        color: black;
        background-color: white;
        border: 2px solid #ccc;
        border-radius: 10px;
        padding: 8px 8px;
        width: 20em;
        margin-left: -20%;
    }

    button {
        font-weight: bold;
        font-size: 1.2em;
        color: white;
        font-weight: bold;
        background-color: red;
        margin-left: 1%;
        border: 2px solid #ccc;
        padding: 8px 8px;
        border-radius: 10px;
        &:hover {
            color: red;
            background-color: white;
            border: 2px solid black;
            cursor: pointer;
        }
    }
    .nav-bag {
        display: flex;
        align-items: center;
    }

    .cartQuantity {
        color: black;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 20px;
        width: 20px;
        background-color: yellow;
        border-radius: 50%;
    }
`;
