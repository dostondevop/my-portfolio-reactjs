import React from 'react';
import Home from '../Home/Home';
import { Routes, Route, useLocation } from "react-router-dom";
import { AppStyled } from './styled';
import Navbar from '../Navbar/Navbar';
import About from '../About/About';
import Experience from '../Experience/Experience';
import Portfolio from '../Portfolio/Portfolio';
import Skills from '../Skills/Skills';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useSelector, useDispatch } from 'react-redux';
import { YMInitializer } from 'react-yandex-metrika';

export default function App() {
  const darkMode = useSelector(state => state.darkMode);
  const mobileNav = useSelector(state => state.mobileNav);
  const dispatch = useDispatch();
  const location = useLocation(); // ✅ Fix: Get location from react-router-dom

  const handleMobileNavClose = () => {
    if (mobileNav) dispatch({ type: 'MOBILE_NAV' });
  };

  return (
    <AppStyled darkMode={darkMode} mobileNav={mobileNav} onClick={handleMobileNavClose}>
      <Navbar />

      <YMInitializer accounts={[62372413]} options={{ webvisor: true }} />

      {/* ✅ Fix: Correct way to use Routes & Transitions */}
      <TransitionGroup>
        <CSSTransition key={location.pathname} classNames="animate" timeout={800}>
          <Routes location={location}>
            <Route path="/skills" element={<Skills />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/experience-and-education" element={<Experience />} />
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </AppStyled>
  );
}