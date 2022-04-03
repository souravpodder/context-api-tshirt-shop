import React from 'react';
// import { Link as CustomLink } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import "./Header.css";

const Header = () => {
  return (
    <div className='header'>
      <h3> welcome to tshirt shop</h3>
      <nav>
        <CustomLink to="/home">Home</CustomLink>
        <CustomLink to="/orderreview">Order Review</CustomLink>
        <CustomLink to="/grandpa">Grand Pa</CustomLink>
      </nav>
    </div>

  );
};

export default Header;