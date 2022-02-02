import styled from 'styled-components';
import { rotateSpider } from '../../styles/animations';

export const Wrapper = styled.div`
    background: #352f32;
`;
export const WrapperList = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    height: 100%;

    .loading {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 30vh;
        animation: ${rotateSpider} 2s infinite;
    }

    @media screen and (min-width: 768px) {
        .movieList {
            & > * {
                margin: 15px 30px;
            }
        }
        .loading {
            margin-top: 30vh;
        }
    }
`;
