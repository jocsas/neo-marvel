import { keyframes } from 'styled-components';

export const scaleUpCenter = keyframes`
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.1);
    }
`;

export const fadeIn = keyframes`
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
`;

export const rotateSpider = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;
