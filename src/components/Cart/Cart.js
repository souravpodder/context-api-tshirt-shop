import React from 'react';
import './Cart.css';

const Cart = ({ cart, deleteItem }) => {

  // conditional rendering 
  // 1.Elemental variable 
  let command;
  if (cart.length === 0) {
    command = <p>please add at least one item.</p>;
  } else if (cart.length < 4) {
    command = <p>please add more item.</p>;
  } else {
    command = <p>Thanks for adding items.</p>;
  }
  return (
    <div>

      <h3>Items selected: {cart.length}</h3>
      {
        cart.map(tshirt => <p>{tshirt.name} <button onClick={() => deleteItem(tshirt)}>delete</button></p>)
      }

      {
        cart.length === 3 && <div className='orange'>
          <h3>three items added</h3>
          <p>deceide to give whom</p>
        </div>
      }

      {command}

      {
        cart.length === 4 ? 'you added 4 items' : 'hello there!'
      }

      {
        cart.length === 0 ||
        <div className='orange'>
          <p>you are awesome!</p>
        </div>
      }
    </div>
  );
};

export default Cart;