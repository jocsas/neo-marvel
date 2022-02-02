import styled from 'styled-components';
import { keyframes } from 'styled-components';

const fadeIn = keyframes`
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
`;

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
const scaleUpCenterZero = keyframes`
    0% {
        -webkit-transform: scale(0);
        transform: scale(0);
    }
    100% {
        -webkit-transform: scale(1);
        transform: scale(1);
    }
    `;

const rotateSpinner = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    `;

export const Wrapper = styled.aside`
    height: calc(100vh - 60px);
    width: 100%;
    position: absolute;
    background-color: #fff;
    z-index: 3;
    border: 5px solid #81343a;
    display: flex;
    flex-direction: column;

    .rareItem {
        color: goldenrod;
        font-weight: bold;
    }

    .bottom {
        height: 100px;
        margin: 10px 20px;
        .total {
            display: flex;
            align-items: center;

            margin-bottom: 25px;
            p {
                font-size: 18px;
                flex-grow: 1;
            }
            strong {
                font-size: 22px;
                justify-self: flex-end;
            }
        }
        .button {
            all: unset;
            padding: 0 2px;
            margin-bottom: 0.2em;
            background-color: #81343a;
            color: white;
            border-radius: 5px;
            cursor: pointer;
        }
    }
    @media (min-width: 768px) {
        width: 330px;
        right: 0;
    }
`;

export const WrapperCartTop = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px;
    p {
        font-size: 30px;
    }
`;

export const WrapperCartList = styled.ul`
    margin: auto 10px;
    flex-grow: 1;
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    animation: ${fadeIn} 0.5s linear;

    button:active {
        animation: ${scaleUpCenter} 0.2s cubic-bezier(0.39, 0.575, 0.565, 1)
            both;
    }

    &::-webkit-scrollbar {
        display: none;
    }

    .comic {
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        padding-bottom: 10px;
        border-bottom: #ccc solid 2px;

        .comicLogo {
            margin-right: 10px;
            box-shadow: 0.5px 0.5px 5px 0.5px;
            img {
                width: 35px;
                height: 50px;
            }
        }
        .comicInfoWrapper {
            width: 100%;
            display: flex;
            align-items: center;
            .comicTitle {
                font-style: italic;
                font-weight: 700;
                flex-grow: 1;
                width: 40%;
                margin-right: 10px;
            }
            .price {
                font-weight: bold;
                margin: 0px 20px 0px 0px;
                width: 80px;
                text-align: right;
            }
        }
        .quantity {
            display: flex;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            align-items: center;
            justify-content: center;
            color: white;
            background-color: #81343a;
            margin: 0px 0px 0px 0px;
        }
    }
`;
