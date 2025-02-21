import styled from 'styled-components';
import { maxWidth } from './variables';

export const Wrapper = styled.div`
    max-width: ${maxWidth};
    width: 100%;
    margin: 0 auto;
    padding: 0 30px;

    @media(max-width: 512px) {
        padding: 0 15px;
    }
`