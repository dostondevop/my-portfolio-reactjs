import styled from 'styled-components';

export const SocialsStyled = styled.div`
    display: flex;
    align-items: center;
    margin-right: 10px;

    a {
        margin: 0 10px;
        transition: 250ms ease-out;
        :first-child {
            margin-left: 0;
        }
    }

    a.facebook: hover {
        color: #8b9dc3;
    }
    a.instagram: hover {
        color: #DC5D65;
    }
    a.github: hover {
        color: #aaa;
    }
    a.linkedin: hover {
        color: #0077B5;
    }

    @media(max-width: 512px) {
        justify-content: space-between;
        margin: 0;
        opacity: 0;
        animation: fadeIn 200ms forwards 1000ms;
    }

    @keyframes fadeIn {
        to {
            opacity: 1;
        }
    }
`