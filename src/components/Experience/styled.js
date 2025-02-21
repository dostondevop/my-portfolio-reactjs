import styled, { css } from 'styled-components';
import { darkBg, lightBg, primaryColor } from './../../elements/variables';

export const ExperienceStyled = styled.section`
    background: ${props => props.darkMode ? darkBg : lightBg};
    ${props => css`min-height: ${props.height}px;`}
    position: absolute;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;

    .wrapper {
        display: flex;
        justify-content: center;
        padding-top: 180px;
        padding-bottom: 80px;
    }

    h3 {
        font-size: 19px;
    }

    p {
        font-size: 15px;
        margin: 0;
        opacity: ${props => props.darkMode ? '.6' : '1'};

        :first-child {
            opacity: 1;
            font-size: 19px;
            font-weight: 500;
        }
    }

    small {
        opacity: .6;
        margin-top: 6px;
        font-size: 12px;
    }

    .milestone {
        width: 100%;
        max-width: 800px;

        .item {
            display: flex;
            align-items: center;        
            justify-content: center;
            margin-bottom: -6px;
            opacity: 0;
            transform: translateY(-50px);
            ${props => props.length.map((x, i) => css`
                :nth-child(${i+1}) {
                    animation: fadeIn 400ms forwards ${(i+3)/6}s;
                }
            `)}
            :hover > .left{
                color: ${primaryColor};
            }

            .left {
                flex: 1;
                padding: 50px 30px;
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                border-right: 1px solid ${props => props.darkMode ? lightBg : '#888'};;
                position: relative;
                text-align: right;
                transition: 200ms;
                :before {
                    content: '';
                    position: absolute;
                    top: 50%;
                    transform: rotate(45deg) translateY(-50%);
                    right: -2px;
                    height: 12px;
                    width: 12px;
                    background: ${primaryColor};
                }
                :after {
                    content: '';
                    position: absolute;
                    top: calc(50% - 2px);
                    transform: translateY(-50%);
                    right: -13px;
                    height: 30px;
                    width: 12px;
                    background: ${props => props.darkMode ? darkBg : lightBg};
                }
            }

            .right {
                flex: 1;
                padding: 30px;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                text-align: left;
            }
        }
        .item.reverse {
            flex-direction: row-reverse;

            .left {
                text-align: left;
                align-items: flex-start;
                border-right: none;
                border-left: 1px solid ${props => props.darkMode ? lightBg : '#888'};
                :before {
                    left: -11px;
                }
                :after {
                    left: -13px;
                }
            }

            .right {
                text-align: right;
                align-items: flex-end;
            }
        }
    }

    @keyframes fadeIn {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @media(max-width: 1024px) {
        .wrapper {
            padding-top: 140px;
        }
    }

    @media(max-width: 512px) {
        .wrapper {
            padding-top: 120px;

            .item.reverse .right {
                padding-left: 0;
            }
            .item.reverse .left {
                padding-right: 0;
            }

            h3 {
                font-size: 16px;
            }
        }
    }
`