import React from 'react';
import { PortfolioStyled } from './styled';
import Masonry from 'react-masonry-css';
import { Wrapper } from '../../elements/Wrapper';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

// Project images
import Magicline from './../../assets/img/portfolio/Magicline.png';
import Packiro from './../../assets/img/portfolio/Packiro.png';
import iProperty from './../../assets/img/portfolio/iProperty.png';
import LimkokwingNet from './../../assets/img/portfolio/limkokwing-net.png';
import LimkokwingCom from './../../assets/img/portfolio/limkokwing-com.png';
import { useHeight } from '@ulugbek-dev/windowsize';

export default function Portfolio() {
  const darkMode = useSelector(state => state.darkMode);
  const height = useHeight();
  const dispatch = useDispatch();

  const breakpoints = {
    default: 3,
    1200: 3,
    768: 2,
    600: 1
  };

  const projects = [
    // { name: "Packiro", img: Packiro, url: "https://packiro.com/en" },
    // { name: "Magicline", img: Magicline, url: "https://www.magicline.com/" },
    // { name: "Limkokwing.net", img: LimkokwingNet, url: "https://www.limkokwing.net/" },
    // { name: "iProperty.com.my", img: iProperty, url: "https://www.iproperty.com.my/" },
    // { name: "Limkokwing.com", img: LimkokwingCom, url: "https://www.limkokwing.com/" },
  ];

  // Scroll top Navbar size
  const handleScroll = e => {
    dispatch({ type: 'NAV_SCROLL', payload: e.target.scrollTop });
  }

  return (
    <PortfolioStyled length={projects} height={height} darkMode={darkMode} onScroll={e => handleScroll(e)}>
      <Wrapper className="wrapper">
        <Masonry
          breakpointCols={breakpoints}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          <div className="item">
                <h2>Coming soon...</h2>
            </div>
          {projects.map((p, i) => (
            <div className="item" key={i}>
              <a href={p.url} target="_blank" rel="noopener noreferrer">
                <img src={p.img} alt={p.name} />
                <p>{p.name}</p>
              </a>
            </div>
          ))}
        </Masonry>
      </Wrapper>
    </PortfolioStyled>
  );
}