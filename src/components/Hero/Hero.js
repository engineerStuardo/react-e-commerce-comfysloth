import React from 'react';
import { Link } from 'react-router-dom';

import { Wrapper } from './styled';
import heroBcg from '../../assets/hero-bcg.jpeg';
import heroBcg2 from '../../assets/hero-bcg-2.jpeg';

const Hero = () => {
  return (
    <Wrapper className='section-center'>
      <article>
        <h1>
          design your <br /> comfort zone
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis
          ipsa dolorem laboriosam voluptates aspernatur aliquam officiis quos
          vel accusantium impedit facilis eligendi reiciendis repellat
          voluptatibus porro ipsam, similique, vero fugit?
        </p>
        <Link to='/products' className='btn hero-btn'>
          shop now
        </Link>
      </article>
      <article className='img-container'>
        <img src={heroBcg} alt='nice table' className='main-img' />
        <img src={heroBcg2} alt='person working' className='accent-img' />
      </article>
    </Wrapper>
  );
};

export default Hero;
