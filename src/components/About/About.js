import React, { useState, useEffect } from 'react';
import { AboutStyled } from './styled';
import { useHeight, useWidth } from '../../elements/customDep';
import AboutSvg from './../AboutSvg/AboutSvg';
import { Wrapper } from './../../elements/Wrapper';
import { ReactTyped } from "react-typed";
import { useSelector, useDispatch } from 'react-redux';

export default function About() {
    const darkMode = useSelector(state => state.darkMode);
    const height = useHeight();
    const width = useWidth();
    const dispatch = useDispatch();

    const [text, setText] = useState([]);
    const aboutMe = 'I’m a Back-end developer with a strong focus on building scalable and efficient applications. Skilled in Java, Spring Boot, PostgreSQL, and MongoDB, I specialize in developing high-performance systems, working with APIs, and managing databases. While my main expertise lies in Back-end development, I also have solid Front-end skills, including HTML, CSS, CSS libraries, JavaScript, and React. This allows me to create seamless and well-integrated applications from end to end. I’m passionate about writing clean, maintainable code and continuously improving my skills to build reliable and efficient solutions.';

    useEffect(() => {
        if(width <= 512) 
            setText([aboutMe])
        else
            setText([`I am a Front-end `, aboutMe])
    }, [width]);

    
    // Scroll top Navbar size
    const handleScroll = e => {
        dispatch({ type: 'NAV_SCROLL', payload: e.target.scrollTop });
    }

    return (
        <AboutStyled height={height} darkMode={darkMode}>
            <Wrapper className="wrapper" onScroll={e => handleScroll(e)}>
                <div className="animation">
                    <AboutSvg />
                </div>
                <div className="content">
                    <p className="hello">Hello <span>!</span></p>
                    <ReactTyped
                        strings={text}
                        typeSpeed={2}
                        backSpeed={30}
                        backDelay={500}
                        startDelay={400}
                        smartBackspace={true}
                    />
                </div>
            </Wrapper>
        </AboutStyled>
    );
}