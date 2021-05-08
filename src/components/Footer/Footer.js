import React from 'react';

import { Wrapper } from './styled';

const Footer = () => {
  return (
    <Wrapper>
      <h5>&copy;{new Date().getFullYear()}</h5>
      <span>ComfySloth</span>
      <h5>
        Developed by -<span>Italo Stuardo</span>
      </h5>
    </Wrapper>
  );
};

export default Footer;
