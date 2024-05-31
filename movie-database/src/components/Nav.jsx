import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MobileNav from "./MobileNav";
import classNames from 'classnames';
import neuvieLogo from '../assets/neuvie-logo.svg';

const Nav = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  const closeMobileNav = () => {
    setMobileNavOpen(false);
  };

  const active = classNames('mobile-menu', {
    open: mobileNavOpen,
  });

  return (
    <>
      <header className="navigation-wrapper">
        <div className='navigation-header'>
          <span className='navigation-names'>
            <Link to="/" className="header__title-link">
              <img src={neuvieLogo} alt="Neuvie Logo" className='header__neuvie-logo'/>
            </Link>
          </span>
          <span className='navigation-links'>
            <button
              aria-label='toggle mobile menu button'
              className={active}
              onClick={toggleMobileNav}
            >
              <div className='bar-one'/>
              <div className='bar-two'/>
              <div className='bar-three'/>
            </button>
          </span>
        </div>
      </header>
      <MobileNav open={mobileNavOpen} onClose={closeMobileNav} />
    </>
  );
}

export default Nav;