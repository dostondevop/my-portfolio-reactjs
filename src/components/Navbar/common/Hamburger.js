import React from 'react';
import { HamburgerStyled } from './HamburgerStyled';
import { useSelector, useDispatch } from 'react-redux';

export default function Hamburger() {
    const darkMode = useSelector(state => state.darkMode);
    const mobileNav = useSelector(state => state.mobileNav);
    const dispatch = useDispatch();

    return (
        <HamburgerStyled darkMode={darkMode}>
            <div className={`hamburger ${mobileNav ? 'open' : ''}`} onClick={e => {
                e.stopPropagation();
                dispatch({ type: 'MOBILE_NAV' })}
            }>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </HamburgerStyled>
    );
}