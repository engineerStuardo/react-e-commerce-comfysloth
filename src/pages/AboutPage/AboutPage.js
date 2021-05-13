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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            necessitatibus laborum mollitia assumenda. Sequi dolore ad harum
            molestiae commodi inventore cum pariatur ratione corporis, officia
            porro nobis obcaecati dolor et quam perspiciatis quod recusandae
            quaerat dolores ea quidem beatae, excepturi corrupti facilis. Dolor
            impedit quibusdam beatae, culpa dignissimos saepe doloribus.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

export default AboutPage;
