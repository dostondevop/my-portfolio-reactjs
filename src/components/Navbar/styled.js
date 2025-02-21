import styled, { css } from 'styled-components';
import { textDark, textLight } from './../../elements/variables';

export const NavbarStyled = styled.nav`
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    z-index: 99;
    transition: 150ms;
    ${props => props.scrollTop 
        ? css`height: 70px; box-shadow: 0px 4px 5px 0px rgba(0,0,0,0.3); ${props.darkMode 
            ? 'background: rgba(0, 0, 0, .9);' 
            : 'background: rgba(255, 255, 255, .95);'}` 
        : css`height: 100px; background: transparent;`}

    .wrapper {
        display: inherit;
        justify-content: space-between;
        align-items: center;
    }

    .left {
        display: flex; 
        align-items: center;
    }

    ul {
        display: flex;
        list-style: none;
        padding: 0;
        
        li {
            margin-right: 40px;
            opacity: .9;
            font-size: 16px;
            font-weight: 500;
            transition: 200ms ease-out;
            border-top: 1px solid transparent;
            border-bottom: 1px solid transparent;
            :hover {
                opacity: 1;
                border-bottom: 1px solid ${props => props.darkMode ? textLight : textDark};
            }
        }
        a.active {
            border-bottom: 1px solid ${props => props.darkMode ? textLight : textDark};
        }
    }

    @media(max-width: 512px) {
        height: 70px;
    }
`