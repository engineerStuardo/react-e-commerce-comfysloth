import React from 'react';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

import { Wrapper } from './styled';

const Stars = ({ stars, reviews }) => {
  const tmpStars = Array.from({ length: 5 }, (_, index) => {
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <BsStarFill />
        ) : stars >= index + 0.5 ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });

  return (
    <Wrapper>
      <div className='stars'>{tmpStars}</div>
      <p className='reviews'>({reviews} customer reviews)</p>
    </Wrapper>
  );
};

export default Stars;
