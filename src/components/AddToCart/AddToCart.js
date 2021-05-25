import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';

import { Wrapper } from './styled';
import { useCartContext } from '../../context/custom_hooks';
import AmountButtons from '../AmountButtons/AmountButtons';

const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext();

  const { id, stock, colors } = product;
  const [mainColor, setMainColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const increase = () => {
    setAmount(oldAmount => {
      if (oldAmount < stock) return oldAmount + 1;
      return oldAmount;
    });
  };

  const decrease = () => {
    setAmount(oldAmount => {
      if (oldAmount > 1) return oldAmount - 1;
      return oldAmount;
    });
  };

  return (
    <Wrapper>
      <div className='colors'>
        <span>colors : </span>
        <div>
          {colors.map((color, index) => (
            <button
              key={index}
              style={{ background: color }}
              className={`${
                mainColor === color ? 'color-btn active' : 'color-btn'
              }`}
              onClick={() => setMainColor(color)}
            >
              {mainColor === color ? <FaCheck /> : null}
            </button>
          ))}
        </div>
      </div>
      <div className='btn-container'>
        <AmountButtons
          amount={amount}
          increase={increase}
          decrease={decrease}
        />
        <Link
          to='/cart'
          className='btn'
          onClick={() => addToCart(id, mainColor, amount, product)}
        >
          add to cart
        </Link>
      </div>
    </Wrapper>
  );
};

export default AddToCart;
