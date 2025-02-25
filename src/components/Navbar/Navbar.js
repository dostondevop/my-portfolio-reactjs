import React, { useEffect } from 'react';
import { NavbarStyled } from './styled';
import { Wrapper } from './../../elements/Wrapper';
import ModeToggle from './../ModeToggle/ModeToggle';
import Socials from './../Socials/Socials';
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import Nav from './common/Nav';
import Hamburger from './common/Hamburger';
import { useWidth } from '../../elements/customDep';

export default function Navbar() {
  const darkMode = useSelector(state => state.darkMode);
  const navScroll = useSelector(state => state.navScroll);
  const width = useWidth();
  const dispatch = useDispatch();

  // Scroll to top
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch({ type: 'NAV_RESET' });
  }, [pathname]);


  return (
    <>
      <NavbarStyled darkMode={darkMode} scrollTop={navScroll > 30 ? true : false}>
        <Wrapper className="wrapper">
          {width > 991 && <Nav />}
          {width <= 991 && (
            <Hamburger />
          )}

          <div className="left">
            {width > 512 && <Socials />}
            <ModeToggle />
          </div>
        </Wrapper>
      </NavbarStyled>

      {width <= 991 && <Nav />}
    </>
  );
}