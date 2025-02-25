import React from 'react';
import { ExperienceStyled } from './styled';
import { Wrapper } from '../../elements/Wrapper';
import { useHeight, useWidth } from '../../elements/customDep';
import { useSelector, useDispatch } from 'react-redux';

export default function Experience() {
    const darkMode = useSelector(state => state.darkMode);
    const height = useHeight();
    const width = useWidth();
    const dispatch = useDispatch();

    const experienceAndEduction = [
        {
            position: "Assistant Team Manager",
            duration: "March 2023 - Jan 2024",
            location: "Tashkent, Uzbekistan",
            company: "bi1 Supermarkets Chain"
        },
        {
            position: "Software Developer",
            duration: "May 2022 - Jan 2023",
            location: "Tashkent, Uzbekistan",
            company: "Company Stable POS"
        },
        {
            position: "Bachelor's degree in Economics",
            duration: "Sep 2021 - May 2025",
            location: "Tashkent, Uzbekistan",
            company: "University of Biotechnologies"
        },
        {
            position: "Back-end Web Development",
            duration: "May 2024 - Feb 2025",
            location: "Tashkent, Uzbekistan",
            company: "PDP Academy"
        },
        {
            position: "Front-end Web Development",
            duration: "Feb 2022 - Aug 2022",
            location: "Tashkent, Uzbekistan",
            company: "Najot Ta'lim Modern Professions Center"
        },
        {
            position: "High School Diploma",
            duration: "Feb 2020 - May 2021",
            location: "Khorezm, Uzbekistan",
            company: "Humanities Specialized School"
        },
        {
            position: "High School Diploma",
            duration: "Aug 2019 - Feb 2020",
            location: "Khorezm, Uzbekistan",
            company: "Military Specialized School"
        },
        {
            position: "Elementary School Diploma",
            duration: "Sep 2010 - May 2019",
            location: "Khorezm, Uzbekistan",
            company: "Mathematics and Physics Specialized School"
        }
    ];

    // Scroll top Navbar size
    const handleScroll = e => {
        dispatch({ type: 'NAV_SCROLL', payload: e.target.scrollTop });
    }

    return (
        <ExperienceStyled 
            height={height} 
            length={experienceAndEduction} 
            darkMode={darkMode}
            onScroll={handleScroll}
        >
            <Wrapper className="wrapper">
                <div className="milestone">
                    {experienceAndEduction.map((e, i) => (
                        <div key={i} className={`item ${i % 2 && width > 512 ? '' : 'reverse'}`}>
                            <div className="left">
                                <h3>{e.position}</h3>
                            </div>
                            <div className="right">
                                <p>{e.company}</p>
                                <p>{e.location}</p>
                                <small>{e.duration}</small>
                            </div>
                        </div>
                    ))}
                </div>
            </Wrapper>
        </ExperienceStyled>
    );
}