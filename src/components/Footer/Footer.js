import React from 'react';

import { Wrapper } from './styled';

const Footer = () => {
  return (
    <Wrapper>
      <h5>&copy;{new Date().getFullYear()}</h5>
      <span>ComfySloth</span>
      <h5>All rights reserved</h5>
    </Wrapper>
  );
};

export default Footer;
