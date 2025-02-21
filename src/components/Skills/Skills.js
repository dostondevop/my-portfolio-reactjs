import React from 'react';
import { SkillsStyled } from './styled';
import SkillsSvg from './../SkillsSvg/SkillsSvg';
import { Wrapper } from './../../elements/Wrapper';
import { useSelector } from 'react-redux';
import { useHeight } from '@ulugbek-dev/windowsize';
import Slider from 'react-slick';
import { useDispatch } from 'react-redux';

// Skills images
import adobexd from './../../assets/img/skills/adobexd.png';
import bootstrap from './../../assets/img/skills/bootstrap.png';
import css from './../../assets/img/skills/css.png';
import ee from './../../assets/img/skills/ee.png';
import git from './../../assets/img/skills/git.png';
import html from './../../assets/img/skills/html.png';
import javascript from './../../assets/img/skills/javascript.png';
import typescript from './../../assets/img/skills/typescript.png';
import jquery from './../../assets/img/skills/jquery.png';
import mobX from './../../assets/img/skills/mobx.png';
import nextjs from './../../assets/img/skills/nextjs.png';
import photoshop from './../../assets/img/skills/photoshop.png';
import reactjs from './../../assets/img/skills/reactjs.png';
import redux from './../../assets/img/skills/redux.png';
import sass from './../../assets/img/skills/sass.png';
import styledcomponents from './../../assets/img/skills/styledcomponents.png';
import storybook from './../../assets/img/skills/storybook.png';
import graphQL from './../../assets/img/skills/graphQL.png';
import cypress from './../../assets/img/skills/cypress.png';
import java from '../../../src/assets/img/skills/java.png'
import spring_boot from '../../../src/assets/img/skills/spring-boot.png'
import postgresql from '../../../src/assets/img/skills/postgresql.png'
import spring_security from '../../assets/img/skills/spring-security.png'

export default function Skills() {
    const darkMode = useSelector(state => state.darkMode);
    const height = useHeight();
    const dispatch = useDispatch();

    const settings = {
        dots: false,
        infinite: true,
        speed: 8000,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1290,
                settings: {
                slidesToShow: 7
                }
            },
            {
                breakpoint: 1100,
                settings: {
                slidesToShow: 6
                }
            },
            {
                breakpoint: 950,
                settings: {
                slidesToShow: 5
                }
            },
            {
                breakpoint: 800,
                settings: {
                slidesToShow: 4
                }
            },
            {
                breakpoint: 600,
                settings: {
                slidesToShow: 3
                }
            }
        ]
    };

    const skills = [
        {name: "Java", img: java},
        {name: "Spring Boot", img: spring_boot},
        {name: "PostgreSQL", img: postgresql},
        {name: "Spring Security", img: spring_security},
        {name: "HTML", img: html},
        {name: "CSS", img: css},
        {name: "JavaScript", img: javascript},
        // {name: "TypeScript", img: typescript},
        {name: "Bootstrap", img: bootstrap},
        {name: "ReactJS", img: reactjs},
        // {name: "NextJS", img: nextjs},
        // {name: "Redux", img: redux},
        // {name: "MobX", img: mobX},
        // {name: "GraphQL", img: graphQL},
        // {name: "Cypress", img: cypress},
        // {name: "Styled Components", img: styledcomponents},
        // {name: "Storybook", img: storybook},
        {name: "Git", img: git},
        // {name: "jQuery", img: jquery},
        {name: "SaSS", img: sass},
        // {name: "Adobe XD", img: adobexd},
        // {name: "Photoshop", img: photoshop},
        // {name: "Expression Engine", img: ee},
    ]

    // Scroll top Navbar size
    const handleScroll = e => {
        dispatch({ type: 'NAV_SCROLL', payload: e.target.scrollTop });
    }

    return (
        <SkillsStyled height={height} darkMode={darkMode}>
            <Wrapper className="wrapper" onScroll={handleScroll}>
                <SkillsSvg />
                
                <Slider {...settings}>
                    {skills.map((s, i) => (
                        <div className="item" key={i}>
                            <img src={s.img} alt={s.name}/>
                            <p>{s.name}</p>
                        </div>
                    ))}
                </Slider>
            </Wrapper>
        </SkillsStyled>
    );
}