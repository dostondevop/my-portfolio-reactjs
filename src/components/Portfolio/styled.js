import styled, { css } from 'styled-components';
import { darkBg, lightBg, primaryColor } from './../../elements/variables';

export const PortfolioStyled = styled.section`
    ${props => css`min-height: ${props.height}px;`}
    background: ${props => props.darkMode ? darkBg : lightBg};
    position: absolute;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;

    .wrapper {
        padding-top: 150px;
        padding-bottom: 50px;
    }

    .item {
        transform: scale(1);
        transition: 200ms;
        position: relative;
        border: 2px solid transparent;
        border-radius: 5px;
        ${props => props.length.map((x, i) => css`
            :nth-child(${i+1}) a {
                animation: fadeIn 400ms forwards ${(i+3)/6}s;
            }
        `)}
        :hover {
            transform: scale(1.07);
            border: 2px solid ${primaryColor};
        }
        :hover > a > p {
            opacity: 1;
        }

        a {
            display: block;
            opacity: 0;
            transform: scale(.7);
        }
     
        p {
            color: #f6f6f6;
            opacity: 0;
            position: absolute;
            bottom: 0;
            left: 0;
            margin: 0;
            width: 100%;
            padding: 20px;
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;
            background: rgba(0, 0, 0, .9);
            transition: 200ms;
            font-weight: 500;
            text-align: center;
        }

        img {
            border-radius: 5px;
            width: 100%;
            box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.25);
        }
    }

    .my-masonry-grid {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        margin-left: -30px;
        width: auto;
    }
    .my-masonry-grid_column {
        padding-left: 30px;
        background-clip: padding-box;
    }
    
    .my-masonry-grid_column > div {
        margin-bottom: 30px;
    }

    @keyframes fadeIn {
        to {
            opacity: 1;
            transform: scale(1);
        }
    }

    @media(max-width: 1024px) {
        .wrapper {
            padding-top: 120px;
        }
    }

    @media(max-width: 600px) {
        .wrapper {
            padding-top: 100px;
        }
        .my-masonry-grid_column > div {
            margin-bottom: 10px;
        }
    }
`