import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav'; // Import Nav component
import neuvieLogo from '../assets/neuvie-logo.svg';
import '../scss/styles.scss';

const Header = () => {
  console.log("Header component rendered");
  return (
    <header className="header">
      <h1 className="header__title">
        <Link to="/" className="header__title-link">
          <img src={neuvieLogo} alt="Neuvie Logo" className='header__neuvie-logo'/>
        </Link>
      </h1>
      <Nav /> {/* Include Nav component here */}
    </header>
  );
}

export default Header;