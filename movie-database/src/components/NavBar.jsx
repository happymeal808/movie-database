import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import classNames from 'classnames';
import neuvieLogo from '../assets/neuvie-logo.svg';
import NavButton from './NavButton';
import '../scss/styles.scss';

const NavBar = () => {
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

    const displayMobileNavLinks = classNames('mobile-nav-wrapper', {
        open: mobileNavOpen,
    });

    return (
        <header className="navigation-wrapper">
            <div className="navigation-header">
                <div className="navigation-names">
                    <Link to="/" className="header__title-link">
                        <img src={neuvieLogo} alt="Neuvie Logo" className="header__neuvie-logo" />
                    </Link>
                </div>
                <div className="navigation-links">
                    <NavButton buttonClass={buttonClass} hamClass={hamClass} toggleMobileNav={toggleMobileNav} />
                </div>
                <nav aria-label="mobile navigation" className={displayMobileNavLinks}>
                    <ul>
                        <li>
                            <NavLink className="nav-link" activeClassName="active" exact to="/" onClick={closeMobileNav}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link" activeClassName="active" to="/about" onClick={closeMobileNav}>About</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link" activeClassName="active" to="/favourites" onClick={closeMobileNav}>Favourites</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default NavBar;