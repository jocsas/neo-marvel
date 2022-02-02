import styled from 'styled-components';
import { scaleUpCenter } from '../../styles/animations';

export const WrapperModal = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.7);

    .modal {
        position: absolute;
        background-color: #c8d2dc;
        width: 70%;
        max-width: 400px;
        height: 200px;
        border: 2px solid #c3cfd9;
        right: 0;
        left: 0;
        top: 25%;
        margin: auto;
        -webkit-animation: ${scaleUpCenter} 0.5s
            cubic-bezier(0.39, 0.575, 0.565, 1) both;
        animation: ${scaleUpCenter} 0.5s cubic-bezier(0.39, 0.575, 0.565, 1)
            both;

        & > * {
            margin: 0px 10px;
        }

        h2 {
            font-size: 26px;
            font-weight: bold;
        }
        p {
            font-weight: 500;
            font-size: 16px;
            text-align: center;
        }
    }
    .modalWrapper {
        padding: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        height: 100%;
    }
`;
