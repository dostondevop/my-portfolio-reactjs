import React from 'react';
import Home from '../Home/Home';
import { Route, Switch } from 'react-router-dom';
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
  const darkMode = useSelector(state => state.darkMode) 
  const mobileNav = useSelector(state => state.mobileNav);
  const dispatch = useDispatch();

  const handleMobileNavClose = () => {
    if(mobileNav)
      dispatch({ type: 'MOBILE_NAV' })
  }

  return (
    <AppStyled darkMode={darkMode} mobileNav={mobileNav} onClick={handleMobileNavClose}>
      <Navbar />

      <YMInitializer accounts={[62372413]} options={{webvisor: true}} />

      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition
              key={location.pathname}
              classNames="animate"
              timeout={800}
            >
              <Switch location={location}>
                <Route path="/skills" render={() => <Skills />} />
                <Route path="/portfolio" render={() => <Portfolio />} />
                <Route path="/experience-and-education" render={() => <Experience />} />
                <Route path="/about" render={() => <About />} />
                <Route path="/" render={() => <Home />} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </AppStyled>
  );
}