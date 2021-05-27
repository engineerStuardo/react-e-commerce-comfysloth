import React, { useState } from 'react';

import { Wrapper } from './styled';

const ProductImages = ({ images = [{ url: '' }] }) => {
  const [main, setMain] = useState(images[0]);

  return (
    <Wrapper>
      <img src={main.url} alt='main product' className='main' />
      <div className='gallery'>
        {images.map(({ url, filename }, index) => (
          <img
            key={index}
            src={url}
            alt={filename}
            onClick={() => setMain(images[index])}
            className={`${url === main.url ? 'active' : null}`}
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default ProductImages;
