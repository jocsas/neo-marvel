import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 5px;
    background-color: black;

    input{
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
        font-weight:bold;
        background-color: red;
        margin-left: 1%;
        border: 2px solid #ccc;
        padding: 8px 8px;
        border-radius: 10px;
        
        &:hover{
            color: red;
            background-color: blue;
            border: 2px solid black;
            cursor: pointer;
        }
    }
    
`;