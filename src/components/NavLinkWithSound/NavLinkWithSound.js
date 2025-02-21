import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';

const NavLinkWithSound = (props) => {
  const audioRef = useRef(new Audio(require('../../assets/sounds/click.wav')));

  const playSound = () => {
    audioRef.current.currentTime = 0;
    audioRef.current.play().catch((error) => {
      console.error('Error playing sound: ', error);
    });
  };

  return (
    <NavLink onClick={() => {
      playSound();
      if (props.click) {
        props.click();
      }
    }} {...props}>
      {props.children}
    </NavLink>
  );
};

export default NavLinkWithSound;
