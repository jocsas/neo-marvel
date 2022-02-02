import { createGlobalStyle } from 'styled-components';
export default createGlobalStyle`
        
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        border: none;
        font-family: 'Marvel', sans-serif;
    }
    
    main {
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
}

    a {
        all: unset;
        cursor: pointer;
    }

    button {
        all: unset;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;

        &:focus {
            outline: none;
            box-shadow: 0 0 0 4px gold;
        }
    }
`;
