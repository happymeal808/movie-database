import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavLinks from './NavLinks';
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

  useEffect(() => {
    if (mobileNavOpen) {
      document.body.classList.add('nav-open');
    } else {
      document.body.classList.remove('nav-open');
    }
  }, [mobileNavOpen]);

  const buttonClass = classNames('mobile-menu', {
    open: mobileNavOpen,
  });

  const hamClass = classNames('ham hamRotate ham8', {
    active: mobileNavOpen,
  });

  return (
    <>
        <div className="navigation-header">
          <div className="navigation-names">
            <Link to="/" className="header__title-link">
              <img src={neuvieLogo} alt="Neuvie Logo" className="header__neuvie-logo" />
            </Link>
          </div>
          <span className="navigation-links">
            <button
              aria-label="toggle mobile menu button"
              className={buttonClass}
              onClick={toggleMobileNav}
            >
              <svg className={hamClass} viewBox="0 0 100 100" width="80">
                <path
                  className="line top"
                  d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
                />
                <path
                  className="line middle"
                  d="m 30,50 h 40"
                />
                <path
                  className="line bottom"
                  d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
                />
              </svg>
            </button>
          </span>
          <NavLinks open={mobileNavOpen} onClose={closeMobileNav} />
        </div>
    </>
  );
};

export default Nav;