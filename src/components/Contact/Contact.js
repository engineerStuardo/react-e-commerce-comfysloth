import React from 'react';

import { Wrapper } from './styled';

const Contact = () => {
  return (
    <Wrapper>
      <div className='section-center'>
        <h3>Join our newsletter and get 20% off</h3>
        <div className='content'>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
            quis quae dolore ducimus sit illo tenetur pariatur obcaecati at
            odit.
          </p>
          <form
            action='https://formspree.io/f/xleajjqp'
            method='POST'
            className='contact-form'
          >
            <input
              type='email'
              className='form-input'
              placeholder='enter email'
              name='_replyto'
            />
            <button type='submit' className='submit-btn'>
              subscribe
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
