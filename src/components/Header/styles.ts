import styled, { keyframes } from 'styled-components';

const scaleUpCenter = keyframes`
    0% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
    100% {
      -webkit-transform: scale(1.2);
      transform: scale(1.2);
    }
`;

export const Wrapper = styled.header`
    width: 100%;
    background-color: #81343A;
    color: white;

    height: 60px;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    a {
        text-decoration: none;
    }
`;

export const WrapperNav = styled.div`
    display: flex;
    width: 100%;
    max-width: 1200px;
    align-items: center;
    justify-content: space-between;

    .logo {
        font-size: 24px;
        font-weight: bold;
        background: -webkit-radial-gradient(#ccc, white);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .searchBarWrapper {
        color: black;
        font-size: 16px;

        display: flex;
        align-items: center;
        position: relative;
        width: 200px;
        height: 40px;
        border-radius: 4px;
        width: 50%;
        max-width: 400px;
        background: linear-gradient(white, #efefef),
            linear-gradient(to right, #504E4F, #777171 );
        background-origin: padding-box, border-box;
        background-repeat: no-repeat;
        border: 2px solid transparent;

        input {
            all: unset;
            width: 100%;
            padding: 10px;
        }

        .searchIcon {
            position: absolute;
            right: 0;
            padding-right: 8px;
            all: unset;
            cursor: pointer;
            color: black;
        }

        
    }
    .cart {
        display: flex;
        align-items: center;
        justify-content: center;

        .cartIcon {
            all: unset;
            cursor: pointer;
            display: flex;
        }
  
        button:hover{
            -webkit-animation: ${scaleUpCenter} 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
            animation: ${scaleUpCenter} 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
        }
        button:first-of-type{
            margin-right: 20px;
        }
        .cartQuantity{
            display: flex;
            align-items: center;
            justify-content: center;
            height: 20px;
            width: 20px;
            background-color: yellow;
            color: black;
            font-size: 1em;
            font-weight: bold;
            border-radius: 50px;
            position: relative;
            left: -6px;
            top: -8px;
        }
    }
`;
