import React from 'react';
import Nav from './Nav'; // Import Nav component
import '../scss/styles.scss';

const Header = () => {
  console.log("Header component rendered");
  return (
    <Nav />
  );
}

export default Header;