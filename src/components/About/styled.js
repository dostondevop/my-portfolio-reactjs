import styled from 'styled-components';
import { primaryColor, darkBg, lightBg } from '../../elements/variables';

export const AboutStyled = styled.section`
    position: absolute;
    min-height: ${props => props.height}px;
    background: ${props => props.darkMode ? darkBg : lightBg};
    height: ${props => props.height}px;
    width: 100%;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .wrapper {
        display: flex;
        justify-content: center;

        .animation {
            flex: 1;
            display: flex;
            justify-content: center;

            svg {
                width: 100%;
                padding-left: 30px;
                max-width: 500px;
            }
        }

        .content {
            flex: 1;
            padding: 30px;

            .hello {
                font-size: 32px;
                font-family: 'Helvetica Neue', sans-serif;
                font-weight: 700;
                margin-bottom: 8px;

                span {
                    font-size: 32px;
                    color: ${primaryColor};
                    animation: blink 2000ms infinite;
                }
            }

            span {
                font-size: 20px;
                line-height: 1.4;
                max-width: 600px;
            }
        }
    }

    @keyframes blink {
        from {
            opacity: 0;
        }
        30%, 70% {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }

    @media(max-width: 991px), (max-height: 540px) {
        .wrapper {
            flex-direction: column;
            padding-top: 140px;
            justify-content: flex-start;
            height: 100%;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
    
            .animation {
                height: 30%;
                display: block;
                min-height: 300px;

                svg {
                    padding-left: 0;
                    height: 100%;
                }
            }

            .content {
                padding: 30px 0 60px 0;
            }
        }
    }

    @media(max-width: 512px) {
        .wrapper {
            padding-top: 94px;
        }
        .hello {
            margin-top: 10px;
        }
        .wrapper .content span {
            font-size: 18px;
        }
    }
`