import styled, { css } from 'styled-components';
import { primaryColor } from './../../elements/variables';

const name = 'Dostonbek Kurolboev ';
const nameArr = name.split('');
let count = 1600;

export const NameStyled = styled.h1`
    text-transform: uppercase;
    cursor: default;
    align-self: center;
    font-size: 44px;
    margin: 0;

    span {
        transform: scale(1);
        display: inline-block;
        transition: 200ms;

        :hover {
            color: ${primaryColor};
            transform: scale(1.3);
        }
        ${nameArr.map((x, i) => (
            css`:nth-child(${i}) {
                animation: bounce 200ms ${count += 50}ms;
            }`
        ))}
    }
    .space{
        width: 14px;
    }

    @keyframes bounce {
        0% {
            transform: scale(1);
        }
        50% {
            color: rgb(147, 193, 196);
            transform: scale(1.3);
        }
        100% {
            transform: scale(1);
        }
    }

    @media(max-width: 512px) {
        font-size: 30px;
    }
`