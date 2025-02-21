import React, { useState, useEffect, useRef } from 'react';
import { NameStyled } from './styled';

export default function Name({ name }) {
  const audioRef = useRef(new Audio(require('../../assets/sounds/bubble_sound.wav')));
  audioRef.current.volume = 0.2;

  const playSound = () => {
    audioRef.current.currentTime = 0;
    audioRef.current.play().catch((error) => {
      console.error('Error playing sound: ', error);
    });
  };

  const [anim, setAnim] = useState(true);
  const nameArr = name.split('').map((x, i) => x === ' '
    ? <span className="space" key={i}>{x}</span>
    : <span key={i} onMouseEnter={playSound}>{x}</span>);

  useEffect(() => {
    const animation = setTimeout(() => {
      if (anim)
        setAnim(!anim);
      setAnim(true);
    }, 5000);

    return () => {
      clearTimeout(animation)
    }
  })

  return (
    <NameStyled>
      {anim && nameArr}
    </NameStyled>
  );
}