import styled from 'styled-components';
import { darkBg, lightBg, primaryColor, textLight, textDark } from './../../elements/variables';

export const HomeStyled = styled.header`
    height: ${props => props.height}px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.darkMode ? darkBg : lightBg};
    flex-direction: column;
    padding-top: 40px;
    position: absolute;
    width: 100%;
    top: 0;

    a {
        margin-top: 22px;
        text-decoration: none;
        font-size: 16px;
        display: inline-block;
        position: relative;
        text-align: center;
        color: ${props => props.darkMode ? textLight : textDark};
        border: 1px solid ${primaryColor};
        border-radius: 5px;
        padding: 10px 28px;
        box-shadow: 0 0 0 0 transparent;
        transition: all 0.2s ease-in;

        :hover {
            color: white;
            box-shadow: 0 0 30px 0 transparentize(${primaryColor}, 0.5);
            background-color: ${primaryColor};
            transition: all 0.2s ease-out;

            :before {
                animation: shine 0.5s 0s linear;
            }
        }

        &:active {
            box-shadow: 0 0 0 0 transparent;
            transition: box-shadow 0.2s ease-in;
        }

        &:before {
            content: '';
            display: block;
            width: 0px;
            height: 86%;
            position: absolute;
            top: 7%;
            left: 0%;
            opacity: 0;
            background: white;
            box-shadow: 0 0 15px 3px white;
            transform: skewX(-20deg);
        }

        @keyframes shine {
            from {
                opacity: 0;
                left: 0%;
            }

            50% {
                opacity: 1;
            }
            to {
                opacity: 0;
                left: 100%;
            }
        }
    }

    @media(max-width: 512px) {
        a {
            padding: 8px 23px;
        }
    }
`