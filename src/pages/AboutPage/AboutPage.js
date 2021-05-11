import React from 'react';

import { PageHero } from '../../components';
import { Wrapper } from './styled';
import aboutImg from '../../assets/hero-bcg.jpeg';

const AboutPage = () => {
  return (
    <main>
      <PageHero title='about' />
      <Wrapper className='page section section-center'>
        <img src={aboutImg} alt='nice desk' />
        <article>
          <div className='title'>
            <h2>our story</h2>
            <div className='underline'></div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            voluptate deleniti necessitatibus, perspiciatis ipsa commodi. Quo
            repellat nisi nam nemo distinctio quam voluptatum tenetur harum
            facilis. Neque corporis officia molestias.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

export default AboutPage;
