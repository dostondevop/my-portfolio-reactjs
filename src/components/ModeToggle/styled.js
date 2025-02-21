import styled from 'styled-components';

export const ModeToggleStyled = styled.div`
    position: relative;
    transform: scale(.65);
    margin-right: -15px;

    @media(max-width: 512px) {
        transform: scale(.6);
        margin-right: -20px;
    }
            
    input {
        opacity: 0;
        z-index: -1;
        pointer-events: none;
        position: absolute;
    }

    .toggle {
        cursor: pointer;
        width: 90px;
        height: 40px;
        background-color: #65aac7;
        border-radius: 84px;
        transition: background-color 0.2s cubic-bezier(0.445, 0.05, 0.55, 0.95);
        display: inline-block;
        position: relative;
    }

    .toggle_handler {
        display: inline-block;
        position: relative;
        z-index: 1;
        top: 3px;
        left: 8px;
        width: 34px;
        height: 34px;
        background-color: #ffcf96;
        border-radius: 50px;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
        transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        transform: rotate(-45deg);
        .crater {
            position: absolute;
            background-color: #e8cda5;
            opacity: 0;
            transition: opacity .2s ease-in-out;
            border-radius: 100%;
        }
        .crater_1 {
            top: 15px;
            left: 10px;
            width: 4px;
            height: 4px;
        }
        .crater_2 {
            top: 20px;
            left: 20px;
            width: 4px;
            height: 4px;
        }
        .crater_3 {
            top: 8px;
            left: 20px;
            width: 5px;
            height: 5px;
        }
    }

    .star {
        position: absolute;
        background-color: #fff;
        transition: all 0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95);
        border-radius: 50%;
    }
    .star_1 {
        top: 10px;
        left: 35px;
        z-index: 0;
        width: 30px;
        height: 3px;
    }
    .star_2 {
        width: 30px;
        height: 3px;
        top: 18px;
        left: 28px;
        z-index: 1;
    }
    .star_3 {
        top: 27px;
        left: 40px;
        z-index: 0;
        width: 30px;
        height: 3px;
    }
    .star_4, .star_5, .star_6 {
        opacity: 0;
        transition: all 0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95) 0;
    }
    .star_4 {
        top: 16px;
        left: 11px;
        width: 2px;
        height: 2px;
        z-index: 0;
        transform: translate3d(3px, 0, 0);
    }
    .star_5 {
        z-index: 0;
        transform: translate3d(3px, 0, 0);
        top: 32px;
        left: 17px;
        width: 3px;
        height: 3px;
    }
    .star_6 {
        top: 36px;
        left: 28px;
        z-index: 0;
        width: 2px;
        height: 2px;
        transform: translate3d(3px, 0, 0);
    }

    input:checked + .toggle {
        background-color: #203752;
        .toggle_handler {
            background-color: #e6e6e6;
            transform: translate3d(40px, 0, 0) rotate(0);
        .crater {
            opacity: 1;
        }
    }
    .star_1 {
        width: 2px;
        height: 2px;
    }
    .star_2 {
        width: 4px;
        height: 4px;
        transform: translate3d(-5px, 0, 0);
    }
    .star_3 {
        width: 2px;
        height: 2px;
        transform: translate3d(-7px, 0, 0);
    }
    .star_4, .star_5, .star_6 {
        opacity: 1;
        transform: translateZ(0);
    }
    .star_4 {
        transition: all 0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95) 0.2s;
    }
    .star_5 {
        transition: all 0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95) 0.3s;
    }
    .star_6 {
        transition: all 0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95) 0.4s;
    }
`