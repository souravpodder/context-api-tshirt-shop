import React, { useState } from 'react';
import useTshirts from '../../hooks/useTshirts';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css'

const Home = () => {

  const [tshirts, setTshirts] = useTshirts();
  const [cart, setCart] = useState([]);
  // console.log(tshirts);





  const handleAddToCart = (selectedItem) => {

    let exists = cart.find(tshirt => tshirt._id === selectedItem._id);
    console.log(exists);
    // console.log(!exists);

    if (!exists) {

      let newCart = [...cart, selectedItem];
      setCart(newCart);
    } else {
      alert('item already added!');
    }
  }

  const deleteItem = (item) => {

    const rest = cart.filter(tshirt => tshirt._id !== item._id);
    setCart(rest);

  }

  // console.log(cart);
  return (
    <div className='container'>
      <div className="tshirt-container">
        {
          tshirts.map(tshirt => <Tshirt key={tshirt._id} tshirt={tshirt} handleAddToCart={handleAddToCart} />)
        }
      </div>

      <div className="cart-container">
        <Cart cart={cart} deleteItem={deleteItem}></Cart>
      </div>
    </div>
  );
};

export default Home;