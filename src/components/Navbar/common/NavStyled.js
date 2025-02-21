import styled, { css } from 'styled-components';
import { primaryColor } from './../../../elements/variables';

export const NavStyled = styled.div`
    @media(max-width: 991px) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: absolute;
        height: 100%;
        left: -250px;
        top: 0;
        padding: 30px;
        color: #fff;
        width: 250px;

        ul {
            display: flex;
            flex-direction: column;
            padding: 0;
            z-index: 0;
            margin: 0;
            list-style: none;

            li {
                font-size: 20px;
                margin-bottom: 25px;
                margin-top: 10px;
                opacity: 0;
                transform: translateX(-50%);
                ${props => props.length.map((x, i) => css`
                    :nth-child(${i+1}) {
                        animation: slideEnter 200ms forwards ${(i+2)/8}s;
                    }
                `)}
                
                .active {
                    color: ${primaryColor}
                }
            }
        }
    }

    @media(max-width: 512px) {
        padding: 22px;
    }

    @keyframes slideEnter {
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
`