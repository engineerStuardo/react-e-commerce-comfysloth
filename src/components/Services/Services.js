import React from 'react';

import { Wrapper } from './styled';
import { services } from '../../utils/constants';

const Services = () => {
  return (
    <Wrapper>
      <div className='section-center'>
        <article className='header'>
          <h3>
            custom furniture
            <br />
            built only for you
          </h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
            labore architecto dolores esse nostrum eum deleniti, repudiandae ab
            corporis similique?
          </p>
        </article>
        <div className='services-center'>
          {services.map(({ id, icon, title, text }) => (
            <article key={id} className='service'>
              <span>{icon}</span>
              <h4>{title}</h4>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default Services;
