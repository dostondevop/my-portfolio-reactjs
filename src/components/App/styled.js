import styled from 'styled-components';
import { textLight, textDark } from './../../elements/variables';

export const AppStyled = styled.div`
    color: ${props => props.darkMode ? textLight : textDark};
    height: 100%;
    transition: 200ms;
    transform: ${props => props.mobileNav 
        ? 'translateX(250px); box-shadow: -5px 0px 5px 0px rgba(0,0,0,0.24);' 
        : 'translateX(0)'};

    .animate-enter,
    .animate-enter-active {
        animation: componentIn 800ms forwards;
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    }
    .animate-exit,
    .animate-exit-active {
        animation: componentExit 1200ms forwards;
        box-shadow: 10px 0px 37px 0px rgba(0,0,0,0.2);
    }

    @keyframes componentIn {
        0% {
            opacity: 0;
            transform: scale(.7);
        }
        15% {
            opacity: 0;
            transform: scale(.7);
        }
        100% {
            opacity: 1;
            transform: scale(1);
        }
    }

    @keyframes componentExit {
        0% {
            opacity: 1;
            z-index: 2;
            transform: scale(1) translateX(0%);
        }
        100% {
            opacity: 1;
            z-index: 2;
            transform: scale(1) translateX(-150%);
        }
    }
`