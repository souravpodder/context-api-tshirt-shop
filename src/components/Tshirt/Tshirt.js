import React from 'react';
import './Tshirt.css';

const Tshirt = ({ tshirt, handleAddToCart }) => {
  const { name, picture, price, gender } = tshirt;
  return (
    <div className='tshirt'>
      <img src={picture} alt="" />
      <h5>Name: {name}</h5>
      <p>Price: {price}</p>

      <button onClick={() => handleAddToCart(tshirt)}>Add to Cart</button>
    </div>
  );
};

export default Tshirt;